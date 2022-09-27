import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleAboutPageRoutingModule } from './example-about-page-routing.module';
import { ExampleAboutPageComponent } from './example-about-page.component';


@NgModule({
  declarations: [
    ExampleAboutPageComponent
  ],
  imports: [
    CommonModule,
    ExampleAboutPageRoutingModule
  ]
})
export class ExampleAboutPageModule { }
