import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Agenda } from '../../models/Agenda.dto';
import { EscolhaAgendaService } from '../../services/domain/escolhaAgedna.service';


@IonicPage()
@Component({
  selector: 'page-escolha-agenda',
  templateUrl: 'escolha-agenda.html',
})
export class EscolhaAgendaPage {


  item : Agenda[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public escolhaAgendaService : EscolhaAgendaService) {
  }

  findAllAgenda(){
    this.escolhaAgendaService.findAllAgenda();
  }

  ionViewDidLoad() {
    this.escolhaAgendaService.findAllAgenda()
      .subscribe(reponse => {
        this.item = reponse;
      },
      error => {
        console.log(error);
      });
  }

}
