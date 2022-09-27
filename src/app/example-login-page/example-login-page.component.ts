import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
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


  constructor() {
    super();
    this.countryForm = new FormGroup({
      country: new FormControl(null),
      adSoyad: new FormControl("Kadir")
    });
    this.countryForm.controls['country'].setValue(this.default, { onlySelf: true });
  }

  override ngOnInit(): void {
    // this.globals.isEmptyLayout = true;
  }

  kaydet() {
    // this.aboutHelper.getListItems2();
    console.log(this.countryForm.value);
  }
}
