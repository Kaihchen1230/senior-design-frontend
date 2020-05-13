import { NgModule } from '@angular/core';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PipeModule } from './pipes/pipe.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
      ErrorHandlingComponent,
      LoadingSpinnerComponent
    ],
    imports: [
      CommonModule,
      PipeModule
    ],
    exports: [
      ErrorHandlingComponent,
      LoadingSpinnerComponent,
      CommonModule,
      PipeModule
    ]
})
export class ShareModule {}
