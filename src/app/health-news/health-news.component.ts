import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from'../service/newsapiservices.service';
@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.css']
})
export class HealthNewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  healthnewsDisplay:any =[];
  
  ngOnInit(): void {
    this._services.healthNews().subscribe((result)=>{
      this.healthnewsDisplay= result.articles;
    })
  }

}
