import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs/internal/Subscription';

@ Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit, OnDestroy {
  isAuth:boolean = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    )
  }) ;

  appareils: any[];
  appareilSubscription: Subscription;


constructor(private appareilService:AppareilService) {
    setTimeout(() => {
      this .isAuth=true;}, 4000
    );
  }

  ngOnInit(): void {
    this .appareilSubscription = this .appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this .appareils = appareils;
      }
    );
    this .appareilService.emitAppareilSubject();


  }

  onAllumer() {
    this .appareilService.switchOnAll();
  }

  onEteindre() {
    this .appareilService.switchOffAll();
  }
  ngOnDestroy() {
    this .appareilSubscription.unsubscribe();
  }

  save() {
    this .appareilService.saveAppareiToServer();
  }

  onFetch() {
   this .appareilService.getAppareilsFromServer();
  }
}
