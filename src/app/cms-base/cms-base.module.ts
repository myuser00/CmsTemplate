import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TransferHttpModule, TransferHttpService } from '@gorniv/ngx-transfer-http';
import { CmsBaseComponent } from './cms-base.component';
import { GlobalVariables } from './global-variables';

@NgModule({
  declarations: [
    CmsBaseComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TransferHttpModule,
    ReactiveFormsModule
  ],
  exports: [
    CmsBaseComponent,
    ReactiveFormsModule
  ],
  providers:
    [
      GlobalVariables
    ]
})
export class CmsBaseModule { }
