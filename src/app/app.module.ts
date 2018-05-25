import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SpinnerModule} from '@tsmean/spinner';
import { GithubLinkComponent } from './github-link/github-link.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubLinkComponent
  ],
  imports: [
    BrowserModule,
    SpinnerModule.forRoot({
      primaryColor: '#3F51B5',
      secondaryColor: '#FCBE41'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
