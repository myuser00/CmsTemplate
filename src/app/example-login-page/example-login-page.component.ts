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

  haberler: any[] = [];
  countries: string[] = ['USA', 'UK', 'Canada'];
  default: string = 'UK';
  countryForm: FormGroup;


  constructor(private router: Router) {
    super();
    this.countryForm = new FormGroup({
      country: new FormControl(null),
      adSoyad: new FormControl(null)
    });
    //this.countryForm.controls['country'].setValue(this.default, { onlySelf: true });
  }

  override ngOnInit(): void {
    setTimeout(() => {
      this.globals.isEmptyLayout = true;
    }, 0);
  }

  login() {
    this.router.navigate(['/']);
  }
}
