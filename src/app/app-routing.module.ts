import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'search-result', component: SearchResultComponent },
    { path: 'detail-page', component: DetailPageComponent }
    // { path: 'detail-page', component: DetailPageComponent,
    //   children: [

    //     { path: 'repo-info', component: RepoInfoComponent },
    //     { path: 'owner-info', component: OwnerInfoComponent },
    //     { path: 'trending-info', component: TrendingInfoComponent },
    //     { path: '', redirectTo: 'repo-info', pathMatch: 'full' }
    // ]}

];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{}
