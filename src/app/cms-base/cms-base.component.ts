import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { AppInjector } from './app-injector.service';
import { GlobalVariables } from './global-variables';

@Component({
    template: ''
})
export class CmsBaseComponent implements OnInit {

    //public globals: GlobalVariables;
    //public http: TransferHttpService;
    // public httpClient: HttpClient;//TransferHttpService test edildikten sonra silinebilir.

    constructor() {
        // const injector = AppInjector.getInjector();
        // this.globals = injector.get(GlobalVariables);
        //this.http = injector.get(TransferHttpService);
        // this.httpClient = injector.get(HttpClient);
    }
    ngOnInit(): void {

    }
    // getListItems(listName: string, language: string) {
    //     listName = this.getLanguageListName(listName, language);
    //     let request = this.httpClient.get('http://localhost:85/haberler_en-US.json');
    //     return request;
    // }

    // private getLanguageListName(listName: string, language: string) {
    //     if (language) {
    //         listName += "_" + language;
    //     }
    //     return listName;
    // }

    // getMail() {
    //     return this.http.get('https://reqres.in/api/users');
    // }
}