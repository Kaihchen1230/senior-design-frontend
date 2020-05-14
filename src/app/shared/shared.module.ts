import { NgModule } from '@angular/core';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PipeModule } from './pipes/pipe.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
@NgModule({
    declarations: [
      ErrorHandlingComponent,
      LoadingSpinnerComponent
    ],
    imports: [
      PipeModule,
      SearchBarModule
    ],
    exports: [
      ErrorHandlingComponent,
      LoadingSpinnerComponent,
      PipeModule,
      SearchBarModule
    ]
})
export class ShareModule {}
