import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchService } from './shared/search.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { RepoInfoComponent } from './detail-page/repo-info/repo-info.component';
import { OwnerInfoComponent } from './detail-page/owner-info/owner-info.component';
import { TrendingInfoComponent } from './detail-page/trending-info/trending-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultComponent,
    HomeComponent,
    DetailPageComponent,
    RepoInfoComponent,
    OwnerInfoComponent,
    TrendingInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
