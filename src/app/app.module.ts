import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PessoaService } from '../services/domain/pessoa.service';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptors';
import { authService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { TurmaService } from '../services/domain/turma.service';
import { AuthInterceptorProvider } from '../interceptors/auth-interceptors';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
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
    PessoaService
  ]
})
export class AppModule {}
