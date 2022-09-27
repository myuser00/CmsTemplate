import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleAboutPageComponent } from './example-about-page.component';

const routes: Routes = [{ path: '', component: ExampleAboutPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleAboutPageRoutingModule { }
