import { NgModule } from '@angular/core';
import { ShareModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { DetailContentComponent } from './detail-content.component';
import { OwnerInfoComponent } from './owner-info/owner-info.component';
import { SimilarReposComponent } from './similar-repos/similar-repos.component';
import { RepoInfoComponent } from './repo-info/repo-info.component';
import { TrendingInfoComponent } from './trending-info/trending-info.component';



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
  ],
  exports: [
    DetailContentComponent,
    OwnerInfoComponent,
    RepoInfoComponent,
    TrendingInfoComponent,
    SimilarReposComponent
  ]
})
export class DetailContentModule {}
