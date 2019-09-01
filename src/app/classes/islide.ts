export interface ISlide {
    // returns displayable html code
    run(): string;

    // time in millis, the slide should be displayed
    duration: number;
}
