import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result.component';
import { RepoFilterComponent } from './repo-filter/repo-filter.component';
import { share } from 'rxjs/operators';
import { ShareModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SearchResultComponent,
    RepoFilterComponent
  ],
  imports: [
    ShareModule
  ]
})
export class SearchResultModule {}
