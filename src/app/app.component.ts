import { Component } from '@angular/core';
import { CmsBaseComponent } from './cms-base/cms-base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends CmsBaseComponent {
  isEmptyLayout2: boolean = false;
  GizleMetot() {
    if (this.isEmptyLayout2)
      this.isEmptyLayout2 = false;
    else
      this.isEmptyLayout2 = true;
  }
  title = 'CmsTemplate';
}