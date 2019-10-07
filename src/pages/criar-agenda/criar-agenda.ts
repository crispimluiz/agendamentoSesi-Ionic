import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CriarAgendaService } from '../../services/domain/criarAgenda.service';
import { Agenda } from '../../models/Agenda.dto';

@IonicPage()
@Component({
  selector: 'page-criar-agenda',
  templateUrl: 'criar-agenda.html',
})

export class CriarAgendaPage {
  formGroup: FormGroup;
  agenda : Agenda[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCrtl: AlertController,
    public criarAgendaService : CriarAgendaService) {


  this.formGroup = this.formBuilder.group({
        id: null,
        description:['', [Validators.required]],
        startDate:['', [Validators.required]],
        endDate:['', [Validators.required, Validators.email]],
      });
    }
  criarAgenda(){
    this.criarAgendaService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {"Houve Erro no Cadastro Pessoa"});
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
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad()  {

}


}
