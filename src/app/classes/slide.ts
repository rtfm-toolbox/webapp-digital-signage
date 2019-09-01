import { ISlide } from './islide';

export class SimpleTextSlide implements ISlide {
    duration: number = 30000;

    run(): string {
        return "<h1>Hello World</h1><p>lorem ipsum dolor sit amed</p>"
    }    
    


}
