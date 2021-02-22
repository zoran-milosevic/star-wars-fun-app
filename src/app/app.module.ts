import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { RoutingModule } from './routing.module';
import { APP_MODULES } from '.';

import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    APP_MODULES
  ],
  providers: [
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
