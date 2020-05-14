import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result.component';
import { RepoFilterComponent } from './repo-filter/repo-filter.component';
import { ShareModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchResultComponent,
    RepoFilterComponent
  ],
  imports: [
    ShareModule,
    RouterModule.forChild([
      { path:  'search-result/:search-term', component: SearchResultComponent }
    ])
  ]
})
export class SearchResultModule {}
