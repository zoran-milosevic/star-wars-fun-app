import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact.router';

import { COMPONENTS } from './index';

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  providers: [
    
  ],
  exports: [
    COMPONENTS
  ]
})
export class ContactModule { }
