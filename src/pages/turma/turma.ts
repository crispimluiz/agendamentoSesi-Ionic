import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TurmaService } from '../../services/domain/turma.service';
import { TurmaDTO } from '../../models/turma.dto';

@IonicPage()
@Component({
  selector: 'page-turma',
  templateUrl: 'turma.html',
})
export class TurmaPage {

  items: TurmaDTO[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public turmaService: TurmaService) {
  }

  ionViewDidLoad() {
    this.turmaService.findAll()
      .subscribe(reponse => {
       this.items = reponse;
      },
      error => {
        console.log(error);
      });
  }

}
