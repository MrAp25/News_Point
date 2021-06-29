import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsapiservicesService} from './service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { ScienceNewsComponent } from './science-news/science-news.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { EnterNewsComponent } from './enter-news/enter-news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    ScienceNewsComponent,
    HealthNewsComponent,
    SportsNewsComponent,
    BusinessNewsComponent,
    EnterNewsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
