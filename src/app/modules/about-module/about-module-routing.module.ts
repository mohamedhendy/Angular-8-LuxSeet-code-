import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutBodyComponent } from 'src/app/components/about/about-body/about-body.component';


const routes: Routes = [{ path: '', component: AboutBodyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutModuleRoutingModule { }
