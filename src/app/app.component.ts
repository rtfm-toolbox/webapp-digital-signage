import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ISlide, SlideTypes } from './classes/islide';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Monitor } from './classes/monitor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webapp-digital-signage';

  private monitorDoc: AngularFirestoreDocument<Monitor>;
  private monitorObs: Observable<Monitor>;
  monitor: Monitor;
  timer: any;
  screenid: string;

  currentSlide: ISlide;
  blubber: boolean = false;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit(): void {

    let url = new URL(window.location.href);
    this.screenid = url.searchParams.get("id");

    this.monitorDoc = this.db.doc<Monitor>('signage-monitor/' + this.screenid);
    this.monitorObs = this.monitorDoc.valueChanges();
    this.monitorObs.subscribe(m => {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.monitor = m;
      this.monitor.slides.forEach(s => {
        s.screentype = SlideTypes[s.screen];
      });
      this.currentSlide = this.monitor.slides[1];
      this.ShowNextSlide();

    });

    setInterval(() => {
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

  }

  IsScreentype(screentype): boolean {
    console.log(SlideTypes[this.currentSlide.screentype]);
    return SlideTypes[this.currentSlide.screentype] == screentype;
  }


  ShowNextSlide() {
    let i = this.monitor.slides.indexOf(this.currentSlide);
    this.currentSlide = this.monitor.slides[(i + 1) % this.monitor.slides.length];
    this.timer = setTimeout(() => this.ShowNextSlide(), this.currentSlide.duration * 1000);
  }

}
