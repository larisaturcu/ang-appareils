import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @ Input() appareilName:string;
  @ Input() appareilStatus:string;
  @ Input() indexOfAppareil: number;
  @ Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this .appareilStatus;
  }

  setStatus(status: string) {
    this .appareilStatus = status;
  }

  getColor():string {
    if(this .appareilStatus === "éteint" ) {
      return "red";
    } return "green";
  }
  isStatusAllume(): boolean {
    return  this .appareilStatus==='allumé';
  }

  switchOn() {
    console.log("eteindre " + this.indexOfAppareil )
    this .appareilService.switchOnOne(this .indexOfAppareil);
  }

  switchOff() {
    this .appareilService.switchOffOne(this .indexOfAppareil);
  }

}
