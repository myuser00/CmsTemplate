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
export class CmsBaseComponent {

    public globals: GlobalVariables;
    public http: TransferHttpService;
    public httpClient: HttpClient;//TransferHttpService test edildikten sonra silinebilir.

    constructor() {
        this.httpClient = getHttpClient();
        this.http = getHttp();
        this.globals = getGlobalVariables();
    }

    getListItems() {
        let url = 'https://localhost:44347/Items?itemId=5678&language=' + this.globals.language;
        let request = this.http.get(url);
        return request;
    }
}