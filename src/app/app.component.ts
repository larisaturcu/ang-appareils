import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth:boolean = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    )
  }) ;

  appareils = [{
    name: "Machine à laver",
    status: "allumé"
  },{
    name: "Télévision",
    status: "allumé"
  },{
    name: "Ordinateur",
    status: "éteint"
  },
];

  constructor() {
    setTimeout(() => {
      this.isAuth=true;}, 4000
    );
  }

  onAllumer() {
    console.log("click on allumer");
  }
}
