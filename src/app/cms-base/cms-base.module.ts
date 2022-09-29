import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsBaseComponent } from './cms-base.component';
import { TransferHttpModule, TransferHttpService } from '@gorniv/ngx-transfer-http';
import { HttpClientModule } from '@angular/common/http';
import { GlobalVariables } from './global-variables';

@NgModule({
  declarations: [
    CmsBaseComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TransferHttpModule
  ],
  exports: [
    CmsBaseComponent
  ],
  providers:
    [
      TransferHttpService,//daha sonra denenecek
      GlobalVariables,
      CmsBaseComponent
    ]
})
export class CmsBaseModule { }
