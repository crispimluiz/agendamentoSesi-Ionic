import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Agenda } from '../../models/Agenda.dto';
import { StorageService } from '../../services/storage.service';
import { AgendamentoService } from '../../services/domain/agendamento.service';

@IonicPage()
@Component({
  selector: 'page-agendamento',
  templateUrl: 'agendamento.html',
})
export class AgendamentoPage {

  agenda: Agenda[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public modal: ModalController,
    public agendamentoService: AgendamentoService) {
  }

  ionViewDidLoad() {
    this.agendamentoService.findAll()
      .subscribe(response => {
        this.agenda = response;
      },
      error => {
        console.log(error);
      });
  }

}
