import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about.router';

import { COMPONENTS } from './index';


@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  providers: [

  ],
  exports: [
    COMPONENTS
  ]
})
export class AboutModule { }
