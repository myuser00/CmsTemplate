import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleUserPageComponent } from './example-user-page.component';

const routes: Routes = [{ path: '', component: ExampleUserPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleUserPageRoutingModule { }
