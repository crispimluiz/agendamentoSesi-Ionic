import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Agenda } from '../../models/Agenda.dto';
import { EscolhaAgendaService } from '../../services/domain/escolhaAgedna.service';
import { CriarAgendaService } from '../../services/domain/criarAgenda.service';


@IonicPage()
@Component({
  selector: 'page-escolha-agenda',
  templateUrl: 'escolha-agenda.html',
})
export class EscolhaAgendaPage {


  agendas : Agenda[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public escolhaAgendaService : EscolhaAgendaService,
    public criarAgendaService: CriarAgendaService) {
  }

  findAllAgenda(){
    this.escolhaAgendaService.findAll();
  }

  ionViewDidLoad() {
    this.criarAgendaService.findAll()
    .subscribe(response =>{
      this.agendas = response;

    },
    error => {});
  }

}
