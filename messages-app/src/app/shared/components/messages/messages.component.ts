import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnDestroy, OnInit,
  ViewContainerRef
} from '@angular/core';
import {TextMsgComponent} from "./text-msg/text-msg.component";
import {FileUploader} from "ng2-file-upload";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
declare let EventSource: any;
import * as moment from 'moment'
import {MessageApi} from "../../services/sdk/services/custom/Message";
import {Message} from "../../services/sdk/models/Message";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  providers: [MessageApi]
})
export class MessagesComponent implements OnInit, OnDestroy {
  public fileForUpload: FileUploader;
  public messages: Message[];
  private stream: any;
  @Input() readOnly: boolean = true;

  constructor(private cfr: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private messageApi: MessageApi) {
  }

  ngOnInit() {
    this.getMessages();
    this.start()
      .subscribe(
        event => {
          console.log(event)
          if (event.type === 'update') {
            for (let i = 0; i < this.messages.length; i++) {
              if (this.messages[i].id === event.target) {
                this.messages[i] = event.data;
                break;
              }
            }
          }
          if (event.type === 'create') {
            this.messages.push(event.data)
          }
          this.messages = this.messages.slice();
        },
        error => {
          console.error(error);
        }
      );
    this.fileForUpload = this.newFileInstance();

    this.fileForUpload.onAfterAddingFile = item => {
      const reader = new FileReader();
      reader.onload = () => {
        this.messageApi.create({
          type: 1,
          content: reader.result
        }).toPromise();
      };
      reader.readAsDataURL(item._file);
    }
  }

  addTextMsg() {
    let compFactory = this.cfr.resolveComponentFactory(TextMsgComponent);
    this.viewContainerRef.createComponent(compFactory);
  }

  uploadFile(fileDirective) {
    fileDirective.click();
  }

  newFileInstance() {
    return new FileUploader({
      allowedMimeType: ['image/png', 'image/gif', 'image/jpeg', 'image/jpg'],
      maxFileSize: 1024 * 1024,//1 MB
    });
  }

  getMessages() {
    this.messageApi.find({
      where: {
        hidden: false
      }
    }).subscribe((data: Message[]) => {
      if (data) {
        this.messages = data;
      }
    })
  }

  _onHide(message: Message) {
    this.messageApi.updateAttributes(message.id, Object.assign(message, {hidden: true})).toPromise()
  }

  public start(): Observable<any> {
    let subject = new Subject();
    if (typeof EventSource !== 'undefined') {
      let emit = (msg: any) => subject.next(msg.data && JSON.parse(msg.data) || msg);
      const source = new EventSource([
        environment.apiUrl,
        'api',
        'messages',
        'change-stream',
      ].join('/'));
      source.addEventListener('data', emit);
      source.onerror = emit;
    } else {
      console.warn('SDK Builder: EventSource is not supported');
    }
    return subject.asObservable();
  }

  ngOnDestroy() {
    if (this.stream) {
      this.stream.unsubscribe();
    }
  }

  isHidden(message: Message) {
    return message.hidden || (message.type === 0 && moment(message.expires).diff(moment(), 'seconds') <= 0);
  }
}
