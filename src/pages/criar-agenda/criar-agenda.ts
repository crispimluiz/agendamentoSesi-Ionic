import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CriarAgendaService } from '../../services/domain/criarAgenda.service';
import { AgendaDTO } from '../../models/Agenda.dto';

@IonicPage()
@Component({
  selector: 'page-criar-agenda',
  templateUrl: 'criar-agenda.html',
})

export class CriarAgendaPage {
  formGroup: FormGroup;
  agenda : AgendaDTO[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCrtl: AlertController,
    public criarAgendaService : CriarAgendaService) {


  this.formGroup = this.formBuilder.group({
        id: null,
        description:['', [Validators.required]],
        startDate:['', [Validators.required]],
        endDate:['', [Validators.required]],
      });
    }
  criarAgenda(){
    this.criarAgendaService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {"Houve erro ao Criar Agenda"});
  }
  showInsertOk(){
    let alert = this.alertCrtl.create({
      title:'Sucesso!',
      message:'Criado Descrição e periodo de uma Agenda!',
      enableBackdropDismiss: false,
      buttons:[
        {
          text:'Ok',
          handler:() =>{
            this.navCtrl.setRoot('PessoaPage');
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad()  {
    console.log('ionViewDidLoad CriarAgendaPage');
}


}
