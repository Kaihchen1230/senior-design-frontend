import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';

const appRoutes: Routes = [
    { path: '/home', component: HomeComponent },
    { path: 'search-result', component: SearchResultComponent }

];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{}
