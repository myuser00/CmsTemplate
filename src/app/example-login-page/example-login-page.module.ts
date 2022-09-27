import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleLoginPageRoutingModule } from './example-login-page-routing.module';
import { ExampleLoginPageComponent } from './example-login-page.component';
import { CmsBaseModule } from '../cms-base/cms-base.module';


@NgModule({
  declarations: [
    ExampleLoginPageComponent
  ],
  imports: [
    CommonModule,
    ExampleLoginPageRoutingModule,
    CmsBaseModule
  ]
})
export class ExampleLoginPageModule { }
