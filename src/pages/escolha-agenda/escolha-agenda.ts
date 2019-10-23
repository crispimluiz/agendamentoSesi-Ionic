import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Agenda } from '../../models/Agenda.dto';
import { EscolhaAgendaService } from '../../services/domain/escolhaAgenda.service';
import { CriarAgendaService } from '../../services/domain/criarAgenda.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-escolha-agenda',
  templateUrl: 'escolha-agenda.html',
})
export class EscolhaAgendaPage {


  agendas : Agenda[];
  formGroup: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public escolhaAgendaService : EscolhaAgendaService,
    public criarAgendaService: CriarAgendaService) {

  this.formGroup = this.formBuilder.group({
          description: ['',[]],
          startDate: ['',[]],
          endDate: ['',[]],
      });
    }

  findAll(){
    this.escolhaAgendaService.findAll();
  }

  ionViewDidLoad() {
    this.escolhaAgendaService.findAll()
    .subscribe(response =>{
      this.agendas = response;
    },
    error => {});
  }

}
