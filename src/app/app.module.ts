import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxTwitterTimelineModule} from 'ngx-twitter-timeline'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTwitterTimelineModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
