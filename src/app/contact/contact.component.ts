import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends AboutComponent implements OnInit {

  haberler: any[] = [];
  constructor(http: HttpClient) {
    super(http);
  }

  ngOnInit(): void {
    // this.getListItems2("haberler", "en-US").subscribe(result => {
    //   this.haberler = result as any[];
    // });
    this.haberler = this.getListItems2("haberler", "en-US");
  }

}
