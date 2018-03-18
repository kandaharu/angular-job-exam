import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { CounterService } from './counter.service';
import { ResultComponent } from './result/result.component';
import { ResultService } from './result.service';


@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CounterService, ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
