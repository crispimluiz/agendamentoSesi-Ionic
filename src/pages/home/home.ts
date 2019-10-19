import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { authService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    cpf: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: authService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter(){
    this.auth.refresToken()
    .subscribe(response => {
      this.auth.sucessfullLogin(response.headers.get('Authorization'));
      this.navCtrl.setRoot('PessoaPage');
    },
    error => {} );
  }

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.sucessfullLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('PessoaPage');
      },
      error => {});
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
}
