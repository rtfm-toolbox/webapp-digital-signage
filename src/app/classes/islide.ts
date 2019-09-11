

export enum SlideTypes {
    TextImage = 1,
    Cards = 2
}

export interface ISlide {
    // returns displayable html code
    screen: string;
    screentype: SlideTypes;
    duration: number;
}
