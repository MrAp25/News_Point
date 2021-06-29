import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from'../service/newsapiservices.service';

@Component({
  selector: 'app-enter-news',
  templateUrl: './enter-news.component.html',
  styleUrls: ['./enter-news.component.css']
})
export class EnterNewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  enternewsDisplay: any=[];

  ngOnInit(): void {
    this._services.enterNews().subscribe((result)=>{
      this.enternewsDisplay= result.articles;
    })
  }

}
