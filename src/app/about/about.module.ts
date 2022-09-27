import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CmsBaseComponent } from './cms-base.component';
import { TransferHttpModule, TransferHttpService } from '@gorniv/ngx-transfer-http';


@NgModule({
  declarations: [
    AboutComponent,
    CmsBaseComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule,
    TransferHttpModule,
  ],
  exports: [
    AboutComponent,
    ReactiveFormsModule,
    CmsBaseComponent
  ], providers:
    [
      TransferHttpService
    ]
})
export class AboutModule { }
