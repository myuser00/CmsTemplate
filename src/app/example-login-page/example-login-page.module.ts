import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleLoginPageRoutingModule } from './example-login-page-routing.module';
import { ExampleLoginPageComponent } from './example-login-page.component';

@NgModule({
  declarations: [
    ExampleLoginPageComponent
  ],
  imports: [
    CommonModule,
    ExampleLoginPageRoutingModule,
    ReactiveFormsModule //TODO:CmsBaseModule eklenince hata oluyor
  ],
})
export class ExampleLoginPageModule { }