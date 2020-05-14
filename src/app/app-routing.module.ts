import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetailContentComponent } from './detail-content/detail-content.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },

];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
