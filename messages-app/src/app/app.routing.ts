import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard/choose-role' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
