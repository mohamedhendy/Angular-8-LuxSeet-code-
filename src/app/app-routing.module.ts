import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderHomeComponent } from './components/home/header-home/header-home.component';


const routes: Routes = [
  { path: '' , component: HeaderHomeComponent },
  { path: 'home' , component: HeaderHomeComponent },
  { path: 'about', loadChildren: () => import('./modules/about-module/about-module.module').then(m => m.AboutModuleModule) },
  { path: 'services', loadChildren: () => import('./modules/services-module/services-module.module').then(m => m.ServicesModuleModule) },
  {
    path: 'portfolio', loadChildren: () => import('./modules/portfolio-module/portfolio-module.module')
      .then(m => m.PortfolioModuleModule)
  },
  { path: 'contact', loadChildren: () => import('./modules/conatct-module/conatct-module.module').then(m => m.ConatctModuleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

