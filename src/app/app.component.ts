import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tweet Watcher';

  data!: any
  
  getValue(val: string) {
    this.data = {sourceType:"url",url:val}
  }



}
