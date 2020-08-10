import { Square } from './square';

export class Rectangle extends Square {
    
    constructor(height: number, width:number) {
        super(height, width)
        this.height = height;
        this.width = width;
    }

    
}
