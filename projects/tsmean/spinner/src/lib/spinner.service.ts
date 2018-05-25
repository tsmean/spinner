import {Inject, Injectable} from '@angular/core';
import {SPINNER_SETTINGS_TOKEN} from './constants';
import {SpinnerSettings} from './spinner-settings.interface';

@Injectable()
export class SpinnerService {

  private _spinnerSettings: SpinnerSettings;

  constructor(
    @Inject(SPINNER_SETTINGS_TOKEN) private spinnerSettings: SpinnerSettings
  ) {
    this._spinnerSettings = spinnerSettings;
  }

  get spinnerState(): SpinnerSettings {
    return this._spinnerSettings;
  }

}
