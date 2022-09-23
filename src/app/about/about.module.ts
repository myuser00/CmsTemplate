import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CmsBaseComponent } from './cms-base.component';


@NgModule({
  declarations: [
    AboutComponent,
    CmsBaseComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule,
  ],
  exports: [
    AboutComponent,
    ReactiveFormsModule,
    CmsBaseComponent
  ]
})
export class AboutModule { }
