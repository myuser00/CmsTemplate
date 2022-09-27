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
  constructor(http: TransferHttpService, httpClient: HttpClient) {
    super(http, httpClient);
  }

  ngOnInit(): void {
    // this.http.get('https://reqres.in/api/users?delay=3').subscribe(res => {
    //   this.denemede = (res as any)['data'][0]['email'];
    // });
    // // this.getListItems("haberler", "en-US").subscribe(result => {
    // //   this.haberler = result as any[];
    // // });

    this.getMail().subscribe(res => {
      this.denemede = (res as any)['data'][0]['email'];
    });
  }

}
