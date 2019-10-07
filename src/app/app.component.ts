import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { authService } from '../services/auth.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';

  pages: Array<{title: string, component: string}>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth : authService) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'Usuário', component: 'PessoaPage' },
      { title: 'Criar Agenda', component: 'CriarAgendaPage'},
      { title: 'Escolher Agenda', component: 'EscolhaAgendaPage'},
      { title: 'Intervalo Agenda', component: 'IntervaloAgendaPage'},
      { title: 'Turma', component: 'TurmaPage' },
      { title: 'Logout', component: '' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page:  { title: string, component: string }) {
    switch(page.title){
      case 'Logout':
        this.auth.logout();
        this.nav.setRoot('HomePage');
        break;

        default:
        this.nav.setRoot(page.component);
    }

  }
}
