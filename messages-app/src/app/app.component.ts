import {Component, OnInit} from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import {LoopBackConfig} from "./shared/services/sdk/lb.config";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(){
    setTheme('bs4');
  }

  ngOnInit() {
    LoopBackConfig.setBaseURL(environment.apiUrl);
    LoopBackConfig.filterOnUrl();
  }
}
