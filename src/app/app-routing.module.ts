import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import {ScienceNewsComponent} from './science-news/science-news.component';
import {HealthNewsComponent} from './health-news/health-news.component';
import {BusinessNewsComponent} from './business-news/business-news.component';
import {SportsNewsComponent} from './sports-news/sports-news.component';
import {EnterNewsComponent} from './enter-news/enter-news.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'', component:TopheadingComponent},
  {path:'tech', component:TechnewsComponent},
  {path:'science', component:ScienceNewsComponent},
  {path:'health', component:HealthNewsComponent},
  {path:'business', component:BusinessNewsComponent},
  {path:'sports', component:SportsNewsComponent},
  {path:'enter', component:EnterNewsComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
