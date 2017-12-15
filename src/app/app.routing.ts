import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewAllComponent } from './view-all/view-all.component'
import { VentureDetailComponent } from './venture-detail/venture-detail.component';
import { AddVentureComponent } from './add-venture/add-venture.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: "ventures",
    component: ViewAllComponent
  },
  {
    path: "ventures/:id",
    component: VentureDetailComponent
  },
  {
    path: "add",
    component: AddVentureComponent
  },
  {
    path: "admin",
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
