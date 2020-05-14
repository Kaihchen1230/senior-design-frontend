import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchBarComponent } from './search-bar.component';


@NgModule({
  declarations: [ SearchBarComponent ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    RouterModule,
    SearchBarComponent
  ]
})
export class SearchBarModule {}
