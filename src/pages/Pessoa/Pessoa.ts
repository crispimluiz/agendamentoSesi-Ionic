import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PessoaService } from '../../services/domain/pessoa.service';

@IonicPage()
@Component({
  selector: 'page-pessoa',
  templateUrl: 'pessoa.html',
})
export class PessoaPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public pessoaService: PessoaService) {
  }

  ionViewDidLoad() {
    this.pessoaService.findAll()
      .subscribe(reponse => {console.log(Response);
      },
      error => {})
  }

}
