import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { AgendaIntervaloDTO } from '../../models/AgendaIntervalo.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IntervaloAgendaService } from '../../services/domain/IntervaloAgenda.service';
import { AgendaDTO } from '../../models/Agenda.dto';

@IonicPage()
@Component({
  selector: 'page-intervalo-agenda',
  templateUrl: 'intervalo-agenda.html',
})
export class IntervaloAgendaPage {

  agendaId : number;
  item: AgendaDTO[];
  formGroup: FormGroup;
  agendaIntervalo: AgendaIntervaloDTO[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public formBuilder: FormBuilder,
    public modal: ModalController,
    public alertCrtl: AlertController,
    public intervaloAgendaService: IntervaloAgendaService) {

      this.agendaId = this.navParams.get('agendaId');
      console.log(this.agendaId);

      this.formGroup = this.formBuilder.group({
        id: null,
        day:['', Validators.required],
        startHour1: [''],
        startMinute1: [''],
        endHour1: [''],
        endMinute1: [''],
        startHour2: [''],
        startMinute2: [''],
        endHour2: [''],
        endMinute2: [''],
        startHour3: [''],
        startMinute3: [''],
        endHour3: [''],
        endMinute3: [''],
        startHour4: [''],
        startMinute4: [''],
        endHour4: [''],
        endMinute4: ['']
      });
  }

  inseririntervalos(){
    console.log(this.formGroup.value)
    console.log( this.agendaId)

      this.intervaloAgendaService.insert(this.formGroup.value, this.agendaId)
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {"Houve Erro no Cadastro Pessoa"});
  }
  showInsertOk(){
    let alert = this.alertCrtl.create({
      title:'Sucesso!',
      message:'Cadastro Efetuado com Sucesso!!!',
      enableBackdropDismiss: false,
      buttons:[
        {
          text:'Ok',
          handler:() =>{
            this.navCtrl.pop();
          }
        }
      ]
  });
  alert.present();
}

ionViewDidLoad() {
  console.log('ionViewDidLoad IntervaloAgendaPage')
}

prepararDados(value) : AgendaIntervaloDTO[] {
  let lista = [];
  lista.push({day: value.day,
    startHour: value.startHour1,
    startMinute: value.startMinute1,
    endHour: value.endHour1,
    endMinute: value.endMinute1,
    startHour: value.startHour2,
    startMinute: value.startMinute2,
    endHour: value.endHour2,
    endMinute: value.endMinute2,
    startHour: value.startHour3,
    startMinute: value.startMinute3,
    endHour: value.endHour3,
    endMinute: value.endMinute3,
    startHour: value.startHour4,
    startMinute: value.startMinute4,
    endHour: value.endHour4,
    endMinute: value.endMinute4
      })
  return []
}

/*
  ionViewDidLoad() {
    let agendaId = this.navParams.get('agendaId');
    this.intervaloAgendaService.receberAgenda(agendaId)
      .subscribe(response =>{
        this.item = response;
      },
      error => {})
  };
*/
}
