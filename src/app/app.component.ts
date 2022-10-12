import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router, Routes } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { CmsBaseComponent } from './cms-base/cms-base.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent extends CmsBaseComponent {
  title = 'CmsTemplate';
  isCollapsed = true;
  locales = this.localizeRouterService.parser.locales;
  currentUrl = '';

  ngOnInit(): void {
    this.setCurrentUrl();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      this.setCurrentUrl();
    });
  }
  constructor(@Inject(DOCUMENT) private document: Document) {
    super();
    this.translate.addLangs(["en", "tr"]);
    this.translate.setDefaultLang('tr');

    // const browserLang = translate.getBrowserLang() as string;
    // translate.use(browserLang.match(/en|tr/) ? browserLang : "en");
    this.translate.stream('DIR').subscribe(dir => {
      this.directionChanged(dir);
    });

    this.router.events.subscribe((event: Event) => {
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



  private directionChanged(dir: string): void {
    const htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = dir === 'rtl' ? 'rtl' : 'ltr';
    this.changeCssFile(dir);
  }

  private changeCssFile(dir: string): void {
    const headTag = this.document.getElementsByTagName('head')[0] as HTMLHeadElement;
    const existingLink = this.document.getElementById('bootstrap-css') as HTMLLinkElement;
    // const bundleName = dir === 'rtl' ? 'bootstrap.rtl.min.css' : 'bootstrap.min.css';
    const bundleName = "";

    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      const newLink = this.document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.id = 'bootstrap-css';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }

  }
  private setCurrentUrl(): void {
    this.currentUrl = this.router.url
      .replace('/' + this.localizeRouterService.parser.currentLang, '')
      .split('?')[0];
  }
}