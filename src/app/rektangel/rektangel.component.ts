import { Component, OnInit } from '@angular/core';
import { FormerComponent } from '../former/former.component';

@Component({
  selector: 'app-rektangel',
  templateUrl: './rektangel.component.html',
  styleUrls: ['./rektangel.component.css']
})
export class RektangelComponent extends FormerComponent {


  height
  width
  omkredsresult
  arealresult
  constructor() {super() }

  omkreds(){
    this.omkredsresult = ((this.height*2)+(this.width*2));
     return this.omkredsresult;
  }

  areal(){
    this.arealresult = this.height*this.width;
    return this.arealresult;
  }

}
