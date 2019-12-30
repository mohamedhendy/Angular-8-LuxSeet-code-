import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioModuleRoutingModule } from './portfolio-module-routing.module';
import { PortfolioBodyComponent } from 'src/app/components/portfolio/portfolio-body/portfolio-body.component';
import { PortfolioHeaderComponent } from 'src/app/components/portfolio/portfolio-header/portfolio-header.component';


@NgModule({
  declarations: [
    PortfolioHeaderComponent,
    PortfolioBodyComponent,
  ],
  imports: [
    CommonModule,
    PortfolioModuleRoutingModule
  ]
})
export class PortfolioModuleModule { }
