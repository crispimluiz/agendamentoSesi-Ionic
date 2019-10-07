import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarAgendaPage } from './criar-agenda';

@NgModule({
  declarations: [
    CriarAgendaPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarAgendaPage),
  ],
})
export class CriarAgendaPageModule {}
