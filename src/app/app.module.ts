import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { ShareModule } from './shared/shared.module';
import { SearchBarModule } from './search-bar/search-bar.module';
import { DetailContentModule } from './detail-content/detail-content.module';
import { SearchResultModule } from './search-result/search-result.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
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
    DetailContentModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
