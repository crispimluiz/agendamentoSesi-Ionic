import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intervalo-agenda',
  templateUrl: 'intervalo-agenda.html',
})
export class IntervaloAgendaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntervaloAgendaPage');
  }

}
