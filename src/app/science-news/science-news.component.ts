import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from'../service/newsapiservices.service';

@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.css']
})
export class ScienceNewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  sciencenewsDisplay:any=[];

  ngOnInit(): void {
    this._services.scienceNews().subscribe((result)=>{
      this.sciencenewsDisplay= result.articles;
    })
  }

}
