import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';


@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
