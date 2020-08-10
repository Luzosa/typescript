export class Square {
    width: number;
    height: number;

    constructor(squareheight: number, squarewidth: number){
        this.height = squareheight;
        this.width = squarewidth;
    }

    diameter() {
        return (this.height*2)+(this.width*2);
    }

    radius(){
        return this.width*this.height;
    }
}
