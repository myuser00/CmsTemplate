import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleHomePageComponent } from './example-home-page.component';

const routes: Routes = [{ path: '', component: ExampleHomePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleHomePageRoutingModule { }
