import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare function denemeAlert(): void;
declare function getListItems(listName: string, language: string): any[];
declare function getListItemsWithPaging(): void;
declare function getItemById(): void;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  itemList: Object | undefined;

  constructor(private httpClient: HttpClient) { }
  getLanguageListName(listName: string, language: string) {
    if (language) {
      listName += "_" + language;
    }
    return listName;
  }

  getListItems(listName: string, language: string) {
    listName = this.getLanguageListName(listName, language);
    //https://localhost:44343/api/country
    //http://localhost:85/haberler_en-US.json
    let request = this.httpClient.get('http://localhost:85/haberler_en-US.json');
    return request;
  }

  getListItems2(listName: string, language: string) {
    //return this.getListItems(listName, language);
    return getListItems(listName, language);
  }

}
