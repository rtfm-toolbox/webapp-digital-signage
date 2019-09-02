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

  ngOnInit(): void {
    setInterval(() => {
      console.log("hour", moment().hour());

      if (
        moment().weekday() != 1 &&
        moment().weekday() != 7 &&
        moment().hour() > 15 &&
        moment().hour() < 24) {
        this.blubber = true;
      } else {
        this.blubber = false;
      }
    }, 1000);
  }

}
