import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PessoaPage } from './Pessoa';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    PessoaPage,
  ],
  imports: [
    IonicPageModule.forChild(PessoaPage),
    BrMaskerModule
  ],
})
export class CadastroPageModule {}
