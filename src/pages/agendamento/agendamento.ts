import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimesDTO } from '../../models/Times.dto';
import { StorageService } from '../../services/storage.service';
import { AgendamentoService } from '../../services/domain/agendamento.service';

@IonicPage()
@Component({
  selector: 'page-agendamento',
  templateUrl: 'agendamento.html',
})
export class AgendamentoPage {

items: TimesDTO[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public agendamentoService: AgendamentoService) {
  }

  ionViewDidLoad() {
    this.agendamentoService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {
        console.log(error);
      });
  }

}
