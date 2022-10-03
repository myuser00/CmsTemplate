import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmsBaseModule } from './cms-base/cms-base.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    CmsBaseModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoader,
          deps: [HttpClient]
        }
      }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}