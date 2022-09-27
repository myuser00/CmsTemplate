import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./example-home-page/example-home-page.module').then(m => m.ExampleHomePageModule)
  },
  {
    path: 'example-about-page',
    loadChildren: () => import('./example-about-page/example-about-page.module').then(m => m.ExampleAboutPageModule)
  },
  {
    path: 'example-contact-page',
    loadChildren: () => import('./example-contact-page/example-contact-page.module').then(m => m.ExampleContactPageModule)
  },
  {
    path: 'example-login-page',
    loadChildren: () => import('./example-login-page/example-login-page.module').then(m => m.ExampleLoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
