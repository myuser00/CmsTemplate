import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { CmsBaseComponent } from './about/cms-base.component';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends CmsBaseComponent {
  title = 'CmsTemplate';

  denemede: string = "";
  constructor(http: TransferHttpService, httpClient: HttpClient) {

    super(http, httpClient);
  }

  ngOnInit(): void {
    // this.http.get('https://reqres.in/api/users?delay=4').subscribe(res => {
    //   this.denemede = (res as any)['data'][0]['email'];
    // });
    // this.getListItems("haberler", "en-US").subscribe(result => {
    //   this.haberler = result as any[];
    // });
    this.getMail().subscribe(res => {
      this.denemede = (res as any)['data'][0]['email'];
    });
  }
}

