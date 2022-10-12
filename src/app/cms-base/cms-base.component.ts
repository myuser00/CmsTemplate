import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { TranslateService } from '@ngx-translate/core';
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

function getRouter() {
    return inject(Router);
}

function getTranslateService() {
    return inject(TranslateService);
}

function getLocalizeRouterService() {
    return inject(LocalizeRouterService);
}


@Component({
    template: ''
})
export class CmsBaseComponent {

    public globals: GlobalVariables;
    public http: TransferHttpService;
    public httpClient: HttpClient;//TransferHttpService test edildikten sonra silinebilir.
    public router: Router;
    public translate: TranslateService;
    public localizeRouterService: LocalizeRouterService;

    constructor() {
        this.httpClient = getHttpClient();
        this.http = getHttp();
        this.globals = getGlobalVariables();
        this.router = getRouter();
        this.translate = getTranslateService();
        this.localizeRouterService = getLocalizeRouterService();
    }

    getItemById() {
        let url = 'https://localhost:44347/Items?itemId=5678&language=' + this.globals.language;
        let request = this.http.get(url);
        return request;
    }

    getListItems() {
        let url = 'https://localhost:44347/Items?itemId=5678&language=' + this.globals.language;
        let request = this.http.get(url);
        return request;
    }

    getListItemsWithPaging(itemId: string, page: number, pageSize: number, searchTerm: string, language: string) {
        let url = 'https://localhost:44347/Items?'
            + 'itemId=' + itemId +
            + '&page=' + page
            + '&pageSize=' + pageSize
            + '&searchTerm=' + searchTerm
            + '&language=' + this.globals.language;
        let request = this.http.get(url);
        return request;
    }
}