import {Component, OnInit} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
@Component({
  selector: 'views',
  template: `
    <div class="al-main">
      <div class="al-content easy-transition">
        <!--<ba-content-top></ba-content-top>-->
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./view.scss']
})
export class View implements OnInit {
  ngOnInit() {

  }
}
