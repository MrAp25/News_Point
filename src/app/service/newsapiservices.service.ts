import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) {}

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=685d4df195bc4fa6ad4f051648ade9f2";
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=685d4df195bc4fa6ad4f051648ade9f2";
  scienceApiUrl= "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=685d4df195bc4fa6ad4f051648ade9f2";
  healthApiUrl= "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=685d4df195bc4fa6ad4f051648ade9f2";
  businessApiUrl= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=685d4df195bc4fa6ad4f051648ade9f2";
  sportsApiUrl= "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=685d4df195bc4fa6ad4f051648ade9f2";
  enterApiUrl= "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=685d4df195bc4fa6ad4f051648ade9f2";
      
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
  
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }
  
  scienceNews():Observable<any>
  {
    return this._http.get(this.scienceApiUrl);
  }
  
  healthNews():Observable<any>
  {
    return this._http.get(this.healthApiUrl);
  }
  
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }
  
  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsApiUrl);
  }
  
  enterNews():Observable<any>
  {
    return this._http.get(this.enterApiUrl);
  }
  

}
