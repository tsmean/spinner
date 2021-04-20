import {ModuleWithProviders, NgModule} from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import {SpinnerSettings} from './spinner-settings.interface';
import {SpinnerService} from './spinner.service';
import {SPINNER_SETTINGS_TOKEN} from './constants';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent]
})
export class SpinnerModule {
  static forRoot(spinnerSettings: SpinnerSettings): ModuleWithProviders<SpinnerModule> {
    return {
      ngModule: SpinnerModule,
      providers: [
        {
          provide: SPINNER_SETTINGS_TOKEN,
          useValue: spinnerSettings
        },
        SpinnerService
      ]
    };
  }
}
