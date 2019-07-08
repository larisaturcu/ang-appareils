import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName:string;
  @Input() appareilStatus:string;

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  setStatus(status: string) {
    this.appareilStatus = status;
  }

  getColor():string {
    if(this.appareilStatus === "éteint" ) {
      return "red";
    } 
    return "green";
  }
  
  isStatusAllume(): boolean {
    return  this.appareilStatus==='allumé';
  }
 

}
