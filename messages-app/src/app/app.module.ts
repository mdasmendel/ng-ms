import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import {ViewModule} from "./view/view.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ModalModule} from "ngx-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {SDKBrowserModule} from "./shared/services/sdk/index";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    ViewModule,
    ModalModule.forRoot(),
    HttpClientModule,
    SDKBrowserModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
