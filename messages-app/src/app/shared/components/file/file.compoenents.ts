import {

  Component, EventEmitter,
  Input, Output

} from '@angular/core';

import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']

})
export class FileComponent {

  public modalRef: BsModalRef;

  @Input() fileLink: string;
  @Input() readOnly: boolean = true;
  @Output() onHide = new EventEmitter<boolean>();

  constructor(private modalService: BsModalService) {
  }

  public closeModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }

  public openModal(tmp): void {

    this.modalRef = this.modalService.show(tmp);//open modal;

  }
  hide() {
    this.onHide.emit(true)
  }

}
