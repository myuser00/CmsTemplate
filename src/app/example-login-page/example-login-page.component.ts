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
    console.log(this.loginForm.value);
    this.http.get('https://reqres.in/api/users').subscribe(res => {
      debugger;
      const user = (res as any)['data'][0];
      localStorage.setItem('nameSurname', user['first_name'] + ' ' + user['last_name']);
      this.router.navigate(['/']);
    });
  }


}
