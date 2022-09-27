import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleLoginPageComponent } from './example-login-page.component';

const routes: Routes = [{ path: '', component: ExampleLoginPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleLoginPageRoutingModule { }
