import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webapp-digital-signage';
  content = '';
  blubber = false;
  screen = 0;
  screensCount = 2;

  ngOnInit(): void {
    setInterval(() => {
      console.log("hour", moment().hour());

      if (
        moment().weekday() != 1 &&
        moment().weekday() != 7 &&
        moment().hour() > 14 &&
        moment().hour() < 22) {
        this.blubber = true;
      } else {
        this.blubber = false;
      }
    }, 1000);

    setInterval(() => {
      this.screen++;
      this.screen = this.screen % this.screensCount;
    }, 30000);
  }

}
