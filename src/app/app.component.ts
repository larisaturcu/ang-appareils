import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs';

@ Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  seconde: number;
  counterSubscription: Subscription;

  ngOnInit(): void {
   const counter = Observable.interval(1000);
   this .counterSubscription = counter.subscribe( (value:number) => {this .seconde = value;});
  }

  ngOnDestroy(): void {
     this .counterSubscription.unsubscribe();
  }

  constructor() {}
}
