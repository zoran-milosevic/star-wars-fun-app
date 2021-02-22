import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication.router';

import { PROVIDERS } from './providers';
import { COMPONENTS } from './index';

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  providers: [
    PROVIDERS
  ],
  exports: [
    COMPONENTS
  ]
})
export class AuthenticationModule { }
