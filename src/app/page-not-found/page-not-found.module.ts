import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ PageNotFoundComponent ],
  imports: [
    RouterModule.forChild([
      { path: 'not-found', component: PageNotFoundComponent },
      { path: '**', pathMatch: 'full', redirectTo: '/not-found' }
    ])
  ]
})
export class PageNotFoundModule {}
