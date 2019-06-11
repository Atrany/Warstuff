import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Injectable()
export class ApiWarframeProvider {
  private listeWarframeUrl: string = "https://api.warframestat.us/warframes/warframe";
  private rechercheWarframeUrl: string = "https://api.warframestat.us/warframes/search/warframe";
  
  private idPage = 1

  private httpOptions = {
    headers : new HttpHeaders ({
      "content-type": "application/json"
    }),

    params:{
      "language" : "fr-FR",
      "query": "",
      "page": this.idPage.toString(),
    }
  }

  constructor(private readonly http: HttpClient) {

  }
 
  getWarframe(idPage: string): Observable<any> {
    this.httpOptions.params.page = idPage.toString();
    return this.http.get(this.listeWarframeUrl, this.httpOptions);
  }

  searchWarframe(params): Observable<any> {
    this.httpOptions.params.query = params.filter;
    this.httpOptions.params.page = params.page;
    return this.http.get(this.rechercheWarframeUrl, this.httpOptions);
  }
}