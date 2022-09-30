import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class GlobalVariables {
    isEmptyLayout = false;
    language = "tr-TR";
    loggedUser = { userName: "", email: "" }
}