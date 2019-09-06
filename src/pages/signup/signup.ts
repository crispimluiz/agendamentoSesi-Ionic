import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        nome:['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        cpf:['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
        email:['', [Validators.required, Validators.email]],
        pessoaResponsavel:['', Validators.required],
        dataNascimento: ['',[]],
        observacao: ['',[]],
        celular:['', Validators.required],
        celular2:['', []],
        senha:['', [Validators.required]]
      });

  }

  signupUser(){

  }

}
