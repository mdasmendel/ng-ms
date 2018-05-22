import {NgModule} from "@angular/core";
import {TextComponent} from "./components/text/text.component";
import {FileComponent} from "./components/file/file.compoenents";
import {CommonModule} from "@angular/common";
import {ModalModule} from "ngx-bootstrap";
import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatNativeDateModule
} from "@angular/material";
import {TextMsgComponent} from "./components/messages/text-msg/text-msg.component";
import {MessagesComponent} from "./components/messages/messages.component";
import {FileUploadModule} from "ng2-file-upload";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FileUploadModule,
  ],
  declarations: [TextComponent,FileComponent, TextMsgComponent, MessagesComponent],
  exports: [
    TextComponent, FileComponent,MessagesComponent
  ],
  entryComponents: [TextMsgComponent]
})
export class SharedModule {
}
