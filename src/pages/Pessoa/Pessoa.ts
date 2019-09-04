import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PessoaService } from '../../services/domain/pessoa.service';
import { StorageService } from '../../services/storage.service';
import { PessoaDTO } from '../../models/pessoa.dto';

@IonicPage()
@Component({
  selector: 'page-pessoa',
  templateUrl: 'pessoa.html',
})
export class PessoaPage {

  pessoa: PessoaDTO;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public pessoaService: PessoaService,
    public storage: StorageService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.cpf){
      this.pessoaService.findByCpf(localUser.cpf)
        .subscribe(response => {
          this.pessoa = response;
        },
        error => {

        });
    }
  }

}
