import { TestBed, inject } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';
import {SpinnerSettings} from './spinner-settings.interface';
import {SPINNER_SETTINGS_TOKEN} from './constants';

const SpinnerSettingsMock: SpinnerSettings = {
  primaryColor: 'red'
};

describe('SpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: SPINNER_SETTINGS_TOKEN, useValue: SpinnerSettingsMock},
        SpinnerService
      ]
    });
  });

  it('should be created', inject([SpinnerService], (service: SpinnerService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to get config', inject([SpinnerService], (service: SpinnerService) => {
    expect(service.spinnerState).toEqual(SpinnerSettingsMock);
  }));

});
