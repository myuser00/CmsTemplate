import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';

@Component({
    template: ''
})
export class CmsBaseComponent {

    constructor(private http: TransferHttpService, private httpClient: HttpClient) { }

    getListItems(listName: string, language: string) {
        listName = this.getLanguageListName(listName, language);
        let request = this.httpClient.get('http://localhost:85/haberler_en-US.json');
        return request;
    }

    private getLanguageListName(listName: string, language: string) {
        if (language) {
            listName += "_" + language;
        }
        return listName;
    }

    getMail() {
        return this.http.get('https://reqres.in/api/users');
    }
}