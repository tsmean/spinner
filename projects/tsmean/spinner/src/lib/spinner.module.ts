import {ModuleWithProviders, NgModule} from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import {SpinnerConstants} from './spinner-constants.interface';
import {SpinnerService} from './spinner.service';
import {SPINNER_CONSTANTS} from './constants';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent]
})
export class SpinnerModule {
  static forRoot(spinnerConstants: SpinnerConstants): ModuleWithProviders {
    return {
      ngModule: SpinnerModule,
      providers: [
        {
          provide: SPINNER_CONSTANTS,
          useValue: spinnerConstants
        },
        SpinnerService
      ]
    };
  }
}
