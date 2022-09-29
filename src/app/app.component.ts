import { Component } from '@angular/core';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { CmsBaseComponent } from './cms-base/cms-base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent extends CmsBaseComponent {
  title = 'CmsTemplate';

  constructor(private router: Router) {
    super();

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        setTimeout(() => {
          this.globals.isEmptyLayout = false;
        }, 0);
      }
    });
  }

  changeLanguages(value: string) {
    this.globals.loggedUser
    console.log("the selected value is " + value);
  }
}