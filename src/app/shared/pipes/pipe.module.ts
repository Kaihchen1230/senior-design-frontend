import { LanguageFilterPipe } from './language-filter.pipe';
import { PlatformFilterPipe } from './platform-filter.pipe';
import { RepoDesciptionPipe } from './repo-description.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [LanguageFilterPipe, PlatformFilterPipe, RepoDesciptionPipe],
  exports: [LanguageFilterPipe, PlatformFilterPipe, RepoDesciptionPipe],
})
export class PipeModule {
}
