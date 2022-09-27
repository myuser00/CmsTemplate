import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleContactPageRoutingModule } from './example-contact-page-routing.module';
import { ExampleContactPageComponent } from './example-contact-page.component';


@NgModule({
  declarations: [
    ExampleContactPageComponent
  ],
  imports: [
    CommonModule,
    ExampleContactPageRoutingModule
  ]
})
export class ExampleContactPageModule { }
