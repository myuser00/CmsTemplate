import { Component } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CmsBaseComponent } from './cms-base/cms-base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent extends CmsBaseComponent {
  title = 'CmsTemplate';

  constructor(private router: Router, public translate: TranslateService) {
    super();
    translate.addLangs(["en", "tr"]);
    translate.setDefaultLang('tr');

    // const browserLang = translate.getBrowserLang() as string;
    // translate.use(browserLang.match(/en|tr/) ? browserLang : "en");

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        setTimeout(() => {
          this.globals.isEmptyLayout = false;
        }, 0);
      }
    });
  }

  // changeLanguages(value: string) {
  //   this.globals.language = value;
  // }
  getNameSurname() {
    return localStorage.getItem('nameSurname');
  }

  public changeLanguage(language: string) {
    this.translate.use(language);
  }
}