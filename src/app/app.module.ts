import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchService } from './shared/search.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { RepoInfoComponent } from './detail-page/detail-content/repo-info/repo-info.component';
import { OwnerInfoComponent } from './detail-page/detail-content/owner-info/owner-info.component';
import { TrendingInfoComponent } from './detail-page/detail-content/trending-info/trending-info.component';
import {  SimilarReposComponent } from './detail-page/detail-content/similar-repos/similar-repos.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestRepoService } from './shared/request-repo.service';
import { SimilarRepoComponent } from './detail-page/detail-content/similar-repos/similar-repo/similar-repo.component';
import { DetailContentComponent } from './detail-page/detail-content/detail-content.component';
import { SearchResultContentComponent } from './search-result/search-result-content/search-result-content.component';
import { RefreshComponent } from './refresh/refresh.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    HomeComponent,
    DetailPageComponent,
    RepoInfoComponent,
    OwnerInfoComponent,
    TrendingInfoComponent,
    SimilarReposComponent,
    SimilarRepoComponent,
    SearchBarComponent,
    DetailContentComponent,
    SearchResultContentComponent,
    RefreshComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [SearchService, RequestRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
