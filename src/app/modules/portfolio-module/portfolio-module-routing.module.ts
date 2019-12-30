import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioBodyComponent } from 'src/app/components/portfolio/portfolio-body/portfolio-body.component';

const routes: Routes = [{ path: '', component: PortfolioBodyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioModuleRoutingModule { }
