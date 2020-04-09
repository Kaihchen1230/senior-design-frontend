import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { DetailContentComponent } from './detail-page/detail-content/detail-content.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'search-result', component: SearchResultComponent },
    { path: 'detail-page', component: DetailPageComponent, children: [
      { path: ':repo-name', component: DetailContentComponent }
    ]}


];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
