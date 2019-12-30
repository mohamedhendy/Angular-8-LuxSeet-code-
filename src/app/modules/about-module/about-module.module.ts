import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutModuleRoutingModule } from './about-module-routing.module';
import { AboutBodyComponent } from 'src/app/components/about/about-body/about-body.component';
import { AboutHeaderComponent } from 'src/app/components/about/about-header/about-header.component';
import { AboutTeamComponent } from 'src/app/components/about/about-team/about-team.component';

@NgModule({
  declarations: [
    AboutBodyComponent,
    AboutHeaderComponent,
    AboutBodyComponent,
    AboutTeamComponent,
  ],
  imports: [
    CommonModule,
    AboutModuleRoutingModule
  ]
})
export class AboutModuleModule { }
