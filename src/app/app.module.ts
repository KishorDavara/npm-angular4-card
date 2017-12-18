import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// local import { YeahComponent } from '../yeah/index';
import { YeahComponent } from 'angular4-yeah'; // npm

@NgModule({
  declarations: [
    AppComponent,
    YeahComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
