import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from './shared/shared.module';
import { SearchBarModule } from './search-bar/search-bar.module';
import { DetailContentModule } from './detail-content/detail-content.module';
import { SearchResultModule } from './search-result/search-result.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ShareModule,
    SearchBarModule,
    SearchResultModule,
    DetailContentModule,
    PageNotFoundModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
