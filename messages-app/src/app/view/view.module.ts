import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from "./view.routing";
import {View} from "./view.component";
import {
  MatButtonModule
} from "@angular/material";
import {SharedModule} from "../shared/shared.module";
import { ChooseRoleComponent } from './choose-role/choose-role.component';
import { CustomerComponent } from './customer/customer.component';
import { PresenterComponent } from './presenter/presenter.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    MatButtonModule,
    SharedModule
  ],
  declarations: [View, ChooseRoleComponent, CustomerComponent, PresenterComponent],
  entryComponents: [

  ]
})
export class ViewModule {
}
