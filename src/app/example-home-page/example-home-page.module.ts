import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleHomePageRoutingModule } from './example-home-page-routing.module';
import { ExampleHomePageComponent } from './example-home-page.component';

@NgModule({
  declarations: [
    ExampleHomePageComponent
  ],
  imports: [
    CommonModule,
    ExampleHomePageRoutingModule
  ],
  providers: [],
})
export class ExampleHomePageModule { }
