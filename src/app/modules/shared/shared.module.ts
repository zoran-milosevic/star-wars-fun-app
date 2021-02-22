import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PIPES } from './pipes';

@NgModule({
  declarations: [
    PIPES
  ],
  imports: [
    CommonModule
  ],
  providers: [

  ],
  exports: [
    PIPES
  ]
})
export class SharedModule { }