import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule } from 'angularfire2/database' ;
import { AngularFireAuthModule }from 'angularfire2/auth';
import { AngularFireAuth }from 'angularfire2/auth'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { QuestionPage } from '../pages/question/question';
import { FitnessPlanPage } from '../pages/fitness-plan/fitness-plan';

export const config = {
  apiKey: "AIzaSyACQbDFnbhv5uJCBcyd6Sy1ylmBzvd44AM",
  authDomain: "modal-82ed6.firebaseapp.com",
  databaseURL: "https://modal-82ed6.firebaseio.com",
  projectId: "modal-82ed6",
  storageBucket: "modal-82ed6.appspot.com",
  messagingSenderId: "525147176042"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    QuestionPage,
    FitnessPlanPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    QuestionPage,
    FitnessPlanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuthModule,
    AngularFireAuth
  ]
})
export class AppModule {}
