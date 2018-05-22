import {Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  @Input() data: string;
  @Input() readOnly: boolean = true;
  @Output() onHide = new EventEmitter<boolean>();
  hide() {
    this.onHide.emit(true)
  }
}
