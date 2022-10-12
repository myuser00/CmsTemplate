import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CmsBaseComponent } from '../cms-base/cms-base.component';

@Component({
  selector: 'app-example-home-page',
  templateUrl: './example-home-page.component.html',
  styleUrls: ['./example-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExampleHomePageComponent extends CmsBaseComponent implements OnInit {

  public denemede: string = "";
  haberler: any[] = [];
  constructor() {
    super();
  }

  ngOnInit(): void {
    // this.getListItems().subscribe(result => {
    //   let res = JSON.parse((result as any)['data']);
    //   this.haberler = res as any[];
    //   console.log(this.haberler);
    // });
  }
}
