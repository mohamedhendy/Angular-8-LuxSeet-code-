import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesModuleRoutingModule } from './services-module-routing.module';
import { ServicesBodyComponent } from 'src/app/components/sevices/services-body/services-body.component';
import { ServicesHeaderComponent } from 'src/app/components/sevices/services-header/services-header.component';
import { ServicesDetailsComponent } from 'src/app/components/sevices/services-details/services-details.component';


@NgModule({
  declarations: [
    ServicesHeaderComponent,
    ServicesBodyComponent,
    ServicesDetailsComponent,
  ],
  imports: [
    CommonModule,
    ServicesModuleRoutingModule
  ]
})
export class ServicesModuleModule { }
