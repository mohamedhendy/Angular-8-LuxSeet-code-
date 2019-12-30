import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConatctModuleRoutingModule } from './conatct-module-routing.module';
import { ContactBodyComponent } from 'src/app/components/contact/contact-body/contact-body.component';


@NgModule({
  declarations: [
    ContactBodyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConatctModuleRoutingModule
  ]
})
export class ConatctModuleModule { }
