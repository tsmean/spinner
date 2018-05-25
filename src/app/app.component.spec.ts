import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have some properties'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.myAnimation).toBeDefined();
    expect(app.spinners).toBeDefined();
    expect(app.colors).toBeDefined();
    expect(app.sizes).toBeDefined();
    expect(app.animationExamples).toBeDefined();
    expect(app.sizes).toBeDefined();
    expect(app.sizes).toBeDefined();
    expect(app.bla).toBeUndefined();
  }));
  it('should have correct titles', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#main-title').textContent).toContain('Angular Spinner Library');
    expect(compiled.querySelector('#installation-instructions').textContent).toContain('Installation');
  }));
});
