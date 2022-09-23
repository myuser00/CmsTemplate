import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    template: ''
})
export class CmsBaseComponent {

    constructor(private httpClient: HttpClient) { }

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
}