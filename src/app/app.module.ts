import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RepoInfoComponent } from './detail-content/repo-info/repo-info.component';
import { OwnerInfoComponent } from './detail-content/owner-info/owner-info.component';
import { TrendingInfoComponent } from './detail-content/trending-info/trending-info.component';
import {  SimilarReposComponent } from './detail-content/similar-repos/similar-repos.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestRepoService } from './shared/request-repo.service';
import { DetailContentComponent } from './detail-content/detail-content.component';
import { RefreshComponent } from './refresh/refresh.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LanguageFilterComponent } from './search-result/language-filter/language-filter.component';
import { LanguageFilterPipe } from './shared/pipes/language-filter.pipe';
import { RepoDesciptionPipe } from './shared/pipes/repo-description.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    HomeComponent,
    RepoInfoComponent,
    OwnerInfoComponent,
    TrendingInfoComponent,
    SimilarReposComponent,
    SearchBarComponent,
    DetailContentComponent,
    RefreshComponent,
    PageNotFoundComponent,
    LanguageFilterComponent,
    RepoDesciptionPipe,
    LanguageFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [RequestRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
