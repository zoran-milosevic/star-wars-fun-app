import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PIPES } from './pipes';
import { PROVIDERS } from './providers';

@NgModule({
  declarations: [
    PIPES
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PROVIDERS
  ],
  exports: [
    PIPES
  ]
})
export class SharedModule { }