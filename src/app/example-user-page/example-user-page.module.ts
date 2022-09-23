import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleUserPageRoutingModule } from './example-user-page-routing.module';
import { ExampleUserPageComponent } from './example-user-page.component';
import { AboutModule } from '../about/about.module';


@NgModule({
  declarations: [
    ExampleUserPageComponent
  ],
  imports: [
    CommonModule,
    ExampleUserPageRoutingModule,
    AboutModule
  ]
})
export class ExampleUserPageModule { }
