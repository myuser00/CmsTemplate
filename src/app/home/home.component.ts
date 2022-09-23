import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AboutComponent } from 'src/app/about/about.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries: string[] = ['USA', 'UK', 'Canada'];
  default: string = 'UK';
  countryForm: FormGroup;


  constructor(public aboutHelper: AboutComponent) {
    this.countryForm = new FormGroup({
      country: new FormControl(null),
      adSoyad: new FormControl("Kadir")
    });
    this.countryForm.controls['country'].setValue(this.default, { onlySelf: true });
  }

  ngOnInit(): void {
  }

  kaydet() {
    // this.aboutHelper.getListItems2();
    console.log(this.countryForm.value);
  }
}
