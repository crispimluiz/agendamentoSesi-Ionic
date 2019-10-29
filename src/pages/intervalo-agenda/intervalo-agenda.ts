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

  agenda : AgendaDTO[];
  formGroup: FormGroup;
  agendaIntervalo: AgendaIntervaloDTO[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public formBuilder: FormBuilder,
    public modal: ModalController,
    public alertCrtl: AlertController,
    public intervaloAgendaService: IntervaloAgendaService) {
      this.formGroup = this.formBuilder.group({
        id: null,
        day:['', Validators.required],
        startMillisecond: ['',Validators.required],
        endMillisecond: ['', Validators.required]
      });
  }

  gerarHorarios(){
      this.intervaloAgendaService.insert(this.formGroup.value)
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
    console.log('ionViewDidLoad IntervaloAgendaPage');
  }

}
