import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesBodyComponent } from 'src/app/components/sevices/services-body/services-body.component';

const routes: Routes = [{ path: '', component: ServicesBodyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesModuleRoutingModule { }
