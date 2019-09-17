import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PessoaService } from '../../services/domain/pessoa.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public pessoaService: PessoaService,
    public alertCrtl: AlertController) {

      this.formGroup = this.formBuilder.group({
        id: null,
        nome:['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        cpf:['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        email:['', [Validators.required, Validators.email]],
        ativa:['1',[]],
        pessoaResponsavel:['', Validators.required],
        dataNascimento: ['',[]],
        observacao: ['',[]],
        celular:['', Validators.required],
        celular2:['', []],
        senha:['', [Validators.required]]
      });

  }

  signupUser(){
    this.pessoaService.insert(this.formGroup.value)
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
}
