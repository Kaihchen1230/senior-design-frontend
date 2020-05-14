import { NgModule } from '@angular/core';
import { ShareModule } from '../shared/shared.module';

import { DetailContentComponent } from './detail-content.component';
import { OwnerInfoComponent } from './owner-info/owner-info.component';
import { SimilarReposComponent } from './similar-repos/similar-repos.component';
import { RepoInfoComponent } from './repo-info/repo-info.component';
import { TrendingInfoComponent } from './trending-info/trending-info.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DetailContentComponent,
    OwnerInfoComponent,
    RepoInfoComponent,
    TrendingInfoComponent,
    SimilarReposComponent
  ],
  imports: [
    ShareModule,
    RouterModule.forChild([
      { path: 'detail-page/:platform/:repo-name', component: DetailContentComponent }
    ])
  ]
})
export class DetailContentModule {}
