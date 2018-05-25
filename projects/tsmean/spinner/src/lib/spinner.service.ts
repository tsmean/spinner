import {Inject, Injectable} from '@angular/core';
import {SPINNER_CONSTANTS} from './constants';
import {SpinnerConstants} from './spinner-constants.interface';

@Injectable()
export class SpinnerService {

  private _spinnerState: SpinnerConstants;

  constructor(
    @Inject(SPINNER_CONSTANTS) private spinnerConstants: SpinnerConstants
  ) {
    this._spinnerState = spinnerConstants;
  }

  get spinnerState(): SpinnerConstants {
    return this._spinnerState;
  }

  set spinnerState(value: SpinnerConstants) {
    this._spinnerState = value;
  }

}
