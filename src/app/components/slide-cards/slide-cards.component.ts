import { Component, OnInit, Input } from '@angular/core';
import { ISlide } from 'src/app/classes/islide';

@Component({
  selector: 'app-slide-cards',
  templateUrl: './slide-cards.component.html',
  styleUrls: ['./slide-cards.component.scss']
})
export class SlideCardsComponent implements OnInit {


  @Input('slide') slide: ISlide;

  constructor() { }

  ngOnInit() {
    console.log(this.slide);
  }

}
