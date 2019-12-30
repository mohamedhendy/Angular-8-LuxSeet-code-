import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderHomeComponent } from './components/home/header-home/header-home.component';
import { HeaderBodyComponent } from './components/home/header-body/header-body.component';
import { HomeServicesComponent } from './components/home/home-services/home-services.component';
import { HomeProfileComponent } from './components/home/home-profile/home-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderHomeComponent,
    HeaderBodyComponent,
    HomeServicesComponent,
    HomeProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
