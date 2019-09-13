import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PessoaService } from '../services/domain/pessoa.service';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptors';
import { authService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { TurmaService } from '../services/domain/turma.service';
import { AuthInterceptorProvider } from '../interceptors/auth-interceptors';
import { AlterarCadastroComponent } from '../components/alterar-cadastro/alterar-cadastro';
import { atualizarCadastroService } from '../services/domain/alterarCadastro.service';

@NgModule({
  declarations: [
    MyApp,
    AlterarCadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlterarCadastroComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PessoaService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    authService,
    StorageService,
    TurmaService,
    PessoaService,
    atualizarCadastroService
  ]
})
export class AppModule {}
