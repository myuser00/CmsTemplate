import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleHomePageRoutingModule } from './example-home-page-routing.module';
import { ExampleHomePageComponent } from './example-home-page.component';

import { HttpClientModule } from '@angular/common/http';
import { TransferHttpModule, TransferHttpService } from '@gorniv/ngx-transfer-http';



@NgModule({
  declarations: [
    ExampleHomePageComponent
  ],

  imports: [
    CommonModule,
    ExampleHomePageRoutingModule,
    HttpClientModule, // must have this
    TransferHttpModule,
  ],
  providers: [
    TransferHttpService
  ],
})
export class ExampleHomePageModule { }
