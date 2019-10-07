import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscolhaAgendaPage } from './escolha-agenda';

@NgModule({
  declarations: [
    EscolhaAgendaPage,
  ],
  imports: [
    IonicPageModule.forChild(EscolhaAgendaPage),
  ],
})
export class EscolhaAgendaPageModule {}
