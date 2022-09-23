import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })


export class Cms {
    constructor(private httpClient: HttpClient) { }
    getLanguageListName(listName: string, language: string) {
        if (language) {
            listName += "_" + language;
        }
        return listName;
    }

    getListItems(listName: string, language: string) {
        let result = new Array();
        listName = this.getLanguageListName(listName, language);
        let request = this.httpClient.get<any>('http://localhost:85/haberler_en-US.json');
        var deneme = request.subscribe();
        return deneme;
    }



    //Sayfa numarası 1'den başlar.
    //Listeleme sayfaları için kullanılır.
    //getListItemsWithPaging('haberler',1,30,'','en-US')
    getListItemsWithPaging(
        listName: string,
        page: number,
        pageSize: number,
        searchTerm: string,
        language: string
    ) {
        var listName = this.getLanguageListName("menu", language);
        var result = new Array();
        let request = this.httpClient.get<any[]>('http://localhost:85/haberler_en-US.json');
        var deneme = request.subscribe();
        // result = deneme;

        var filteredResult = result;
        if (searchTerm != null) {
            filteredResult = filteredResult.filter(
                (i) => JSON.stringify(i).indexOf(searchTerm) >= 0
            );
        }
        filteredResult = filteredResult.slice(
            (page - 1) * pageSize,
            (page - 1) * pageSize + pageSize
        );

        return {
            totalPageCount: Math.ceil(filteredResult.length / pageSize),
            totalCount: filteredResult.length,
            items: filteredResult
        };
    }

    //detay sayfası içeriğini getirir.
    //getItemById('haberler',3,'en-US')
    getItemById(listName: string, id: number, language: string) {
        var result = new Array();
        listName = this.getLanguageListName(listName, language);
        let request = this.httpClient.get<any>('http://localhost:85/haberler_en-US.json');
        var deneme = request.subscribe();
        return deneme;//.filter((i) => i.id == id)[0]
        //Filter By id.
    }







}