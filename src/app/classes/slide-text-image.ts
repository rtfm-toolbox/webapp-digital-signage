import { ISlide } from './islide';
import { SafeResourceUrl, SafeHtml } from '@angular/platform-browser';
import { SlideTypes } from './islide';

export class SlideTextImage implements ISlide {
    screen: string;
    duration: number;

    screentype: SlideTypes;
    text: SafeHtml;
    image: SafeResourceUrl;
}
