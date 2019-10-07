import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntervaloAgendaPage } from './intervalo-agenda';

@NgModule({
  declarations: [
    IntervaloAgendaPage,
  ],
  imports: [
    IonicPageModule.forChild(IntervaloAgendaPage),
  ],
})
export class IntervaloAgendaPageModule {}
