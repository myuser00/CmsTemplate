import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CmsBaseComponent } from '../about/cms-base.component';

@Component({
  selector: 'app-example-user-page',
  templateUrl: './asd.component.html',
  styleUrls: ['./example-user-page.component.scss']

})

export class ExampleUserPageComponent extends CmsBaseComponent implements OnInit {

  haberler: any[] = [];
  constructor(http: HttpClient) {
    super(http);
  }

  ngOnInit(): void {
    debugger;
    this.getListItems("haberler", "en-US").subscribe(result => {
      this.haberler = result as any[];
    });
  }

}
