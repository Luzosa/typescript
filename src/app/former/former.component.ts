import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-former',
  templateUrl: './former.component.html',
  styleUrls: ['./former.component.css']
})
export class FormerComponent {

  height: number;
  width: number;
  diameterresult: number = 0;
  radiusresult: number = 0;

  constructor() { }

  diameter(){
    this.diameterresult = (this.height*2)+(this.width*2) ;
     return this.diameterresult + " ";
  }

  radius(){
    this.radiusresult = this.height*this.width;
    return this.radiusresult;
  }
}
