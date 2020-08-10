import { Component, OnInit } from '@angular/core';
import { FormerComponent } from '../former/former.component';

@Component({
  selector: 'app-kvadrat',
  templateUrl: './kvadrat.component.html',
  styleUrls: ['./kvadrat.component.css']
})
export class KvadratComponent extends FormerComponent {

  height
  width
  omkredsresult
  arealresult
  constructor() { super()}

  omkreds(){
    this.omkredsresult = this.height*4;
     return this.omkredsresult;
  }

  areal(){
    this.arealresult = this.width*this.height;
    return this.arealresult;
  }


}
