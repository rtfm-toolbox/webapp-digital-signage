import { Component, OnInit, Input } from '@angular/core';
import { ISlide } from 'src/app/classes/islide';

@Component({
  selector: 'app-slide-text-image',
  templateUrl: './slide-text-image.component.html',
  styleUrls: ['./slide-text-image.component.scss']
})
export class SlideTextImageComponent implements OnInit {

  @Input('slide') slide: ISlide;

  constructor() { }

  ngOnInit() {
    
  }

}
