import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleLoginPageRoutingModule } from './example-login-page-routing.module';
import { ExampleLoginPageComponent } from './example-login-page.component';

@NgModule({
  declarations: [
    ExampleLoginPageComponent
  ],
  imports: [
    CommonModule,
    ExampleLoginPageRoutingModule
  ]
})
export class ExampleLoginPageModule { }