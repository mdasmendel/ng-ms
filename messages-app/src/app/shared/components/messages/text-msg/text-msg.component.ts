import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {NgForm} from '@angular/forms';
import {MessageApi} from "../../../services/sdk/services/custom/Message";
@Component({
  selector: 'app-text-msg',
  templateUrl: './text-msg.component.html',
  styleUrls: ['./text-msg.component.scss']
})
export class TextMsgComponent implements AfterViewInit {

  public modalRef: BsModalRef;
  public data: any;

  //get access to viewer in tpl
  @ViewChild('modal') private modal;

  constructor(private modalService: BsModalService, private messageApi: MessageApi) {

  }

  ngAfterViewInit() {
    this.modalRef = this.modalService.show(this.modal, {});
  }

  public closeModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }

  _onSubmit(f: NgForm){
    if(f.valid){
      this.messageApi.create(Object.assign({
        type: 0
      }, f.value)).toPromise();
      this.modalRef.hide();
      this.modalRef = null;
    }
  }
}
