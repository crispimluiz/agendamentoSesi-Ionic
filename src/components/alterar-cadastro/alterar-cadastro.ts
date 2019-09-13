import { Component } from '@angular/core';
import { PessoaDTO } from '../../models/pessoa.dto';
import { NavController, NavParams, ModalController, IonicPage } from 'ionic-angular';
import { PessoaService } from '../../services/domain/pessoa.service';
import { StorageService } from '../../services/storage.service';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { FormGroup, Validators,  FormBuilder } from '@angular/forms';


@Component({
  selector: 'alterar-cadastro',
  templateUrl: 'alterar-cadastro.html'
})
export class AlterarCadastroComponent {

  formGroup: FormGroup;

  text: string;

  pessoa: PessoaDTO;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public pessoaService: PessoaService,
    public formBuilder: FormBuilder,
    public storage: StorageService,
    public modal: ModalController,
    public view: ViewController) {

  this.formGroup = this.formBuilder.group({
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
  fechaModal(){
    this.view.dismiss();
  }

  alterarUser(){
    console.log(this.formGroup.value)
  }
}
