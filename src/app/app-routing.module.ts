import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import { DetailContentComponent } from './detail-content/detail-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: 'search-result', component: SearchResultComponent, children: [
    //   { path: 'search-result/:search-term', component: SearchResultContentComponent }
    // ]},
    // {
    //   path: 'refresh',
    //   component: RefreshComponent
    // },
    { path:  'search-result/:search-term', component: SearchResultComponent },
    { path: 'detail-page/:platform/:repo-name', component: DetailContentComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/not-found' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
