import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RefreshLibModule } from '@refresh-lib/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RefreshLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
