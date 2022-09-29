import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { GlobalVariables } from './global-variables';

function getHttpClient() {
    return inject(HttpClient);
}

function getHttp() {
    return inject(TransferHttpService);
}

function getGlobalVariables() {
    return inject(GlobalVariables);
}

@Component({
    template: ''
})
export class CmsBaseComponent implements OnInit {

    public globals: GlobalVariables;
    public http: TransferHttpService;
    public httpClient: HttpClient;//TransferHttpService test edildikten sonra silinebilir.

    constructor() {
        this.httpClient = getHttpClient();
        this.http = getHttp();
        this.globals = getGlobalVariables();
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