import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { RoutingModule } from './routing.module';
import { APP_MODULES } from '.';

import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

import { AuthInterceptor } from './modules/authentication/common/auth.interceptor';
import { ErrorInterceptor } from './modules/authentication/common/error.interceptor';

import { fakeBackendProvider } from './data/fake-backed.service';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    APP_MODULES
  ],
  providers: [
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
