import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SpinnerModule} from '@tsmean/spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpinnerModule.forRoot({
      primaryColor: '#FCBE41',
      secondaryColor: '#309488'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
