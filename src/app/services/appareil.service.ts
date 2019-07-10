import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';
import { AppareilViewComponent } from '../appareil-view/appareil-view.component';
import { HttpClient } from '@angular/common/http';

@ Injectable()
export class AppareilService {

  appareilsSubject = new Subject< any[]>();
  private appareils = [
  ];

  constructor (private httpClient: HttpClient) {
  }

  emitAppareilSubject() {
    this .appareilsSubject.next(this .appareils.slice());
  }

  getAppareils() {
    return this .appareils;
  }

  switchOnAll() {
    for (let appareil of this .appareils) {
      appareil.status =  AppareilStatus.ALLUME;
    }
    this .emitAppareilSubject();

  }

  switchOffAll() {
    for (let appareil of this .appareils) {
      appareil.status = AppareilStatus.ETEINT;
    }
    this .emitAppareilSubject();
  }

  switchOnOne(index: number) {
    this .appareils[index].status = AppareilStatus.ALLUME;
    this .emitAppareilSubject();
  }
  switchOffOne(index: number) {
    this .appareils[index].status = AppareilStatus.ETEINT;
    this .emitAppareilSubject();
  }

  getAppareilById(id: number) {
    const appareil = this .appareils.find(appareilObject => {return appareilObject.id ===id;});
    return appareil;
  }

  addAppareil(name: string, status: string): any {
    const apapreilObject = {
      id: 0,
      name : '',
      status: AppareilStatus.ALLUME
    };
    let stat : AppareilStatus= < AppareilStatus>AppareilStatus[status];
    apapreilObject.name = name;
    apapreilObject.status = stat;
    apapreilObject.id = this .appareils[this .appareils.length - 1].id + 1;
    this .appareils.push(apapreilObject);
    this .emitAppareilSubject();
  }

  saveAppareiToServer() {
    this .httpClient.put('https://api-project-132285374408.firebaseio.com/appareils.json', this .appareils). subscribe(
      () => {console.log("save done");},
      (error) => { console.log("save failed" + error);}
    )
  }

  getAppareilsFromServer() {
    this .httpClient.get< any[]>('https://api-project-132285374408.firebaseio.com/appareils.json').subscribe(
      (response) =>
        {this .appareils = response;
        this .emitAppareilSubject();},
    (error) => {console.log("erreur de chargement");});
  }
}
enum AppareilStatus {
  ALLUME = 'allumé', ETEINT ='éteint'
}
