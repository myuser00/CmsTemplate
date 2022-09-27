import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  haberler: any[] = [];

  ngOnInit(): void {
    // this.getListItems2("haberler", "en-US").subscribe(result => {
    //   this.haberler = result as any[];
    // });
    // this.haberler = this.getListItems2("haberler", "en-US");
  }

}
