import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { CmsBaseComponent } from '../cms-base/cms-base.component';

@Component({
  selector: 'app-example-home-page',
  templateUrl: './example-home-page.component.html',
  styleUrls: ['./example-home-page.component.scss']
})
export class ExampleHomePageComponent extends CmsBaseComponent implements OnInit {

  public denemede: string = "";
  haberler: any[] = [];
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.getListItems().subscribe(result => {
      this.haberler = result as any[];
      console.log(this.haberler);
    });
  }
}
