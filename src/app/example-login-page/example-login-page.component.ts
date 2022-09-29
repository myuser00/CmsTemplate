import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CmsBaseComponent } from '../cms-base/cms-base.component';

@Component({
  selector: 'app-example-login-page',
  templateUrl: './example-login-page.component.html',
  styleUrls: ['./example-login-page.component.scss']
})
export class ExampleLoginPageComponent extends CmsBaseComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) {
    super();
    this.loginForm = new FormGroup({
      userName: new FormControl(null),
      password: new FormControl(null)
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.globals.isEmptyLayout = true;
    }, 0);
  }

  login() {
    this.getServiceValue();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }

  getServiceValue() {
    this.http.get('https://reqres.in/api/users').subscribe(res => {
      console.log((res as any)['data'][0]['email']);
      this.loginForm.setValue({
        userName: (res as any)['data'][0]['email'],
        password: (res as any)['data'][0]['first_name']
      });
    });
  }
}
