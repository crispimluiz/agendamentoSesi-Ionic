import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PessoaPage } from './Pessoa';

@NgModule({
  declarations: [
    PessoaPage,
  ],
  imports: [
    IonicPageModule.forChild(PessoaPage),
  ],
})
export class CadastroPageModule {}
