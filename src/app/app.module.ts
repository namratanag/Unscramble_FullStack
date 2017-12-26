import { map } from './app.routing';
//import { WordComponent } from './word.component';
import { WordService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent//WordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    map
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
