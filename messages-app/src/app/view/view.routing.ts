import {Routes, RouterModule}  from '@angular/router';
import {View} from './view.component';
import {ModuleWithProviders} from '@angular/core';
import {ChooseRoleComponent} from "./choose-role/choose-role.component";
import {CustomerComponent} from "./customer/customer.component";
import {PresenterComponent} from "./presenter/presenter.component";

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'dashboard',
    component: View,
    children: [
      {
        path: '', redirectTo: 'choose-role',
        pathMatch: 'full',
      },
      {
        path: 'choose-role',
        component: ChooseRoleComponent,
      },
      {
        path: 'customer',
        component: CustomerComponent,
      },
      {
        path: 'presenter',
        component: PresenterComponent,
      }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
