import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RepoFilterComponent } from './search-result/repo-filter/repo-filter.component';
import { FooterComponent } from './footer/footer.component';
import { ShareModule } from './shared/shared.module';
import { SearchBarModule } from './search-bar/search-bar.module';
import { DetailContentModule } from './detail-content/detail-content.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    HomeComponent,
    PageNotFoundComponent,
    RepoFilterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ShareModule,
    SearchBarModule,
    DetailContentModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
