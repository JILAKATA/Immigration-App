import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 

import { FIREBASE_CONFIG } from "./app.firebase.config";
import { FIREBASE_CONFIG1 } from "./app.firebase1.config";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LawyerLogPage } from '../pages/lawyer-log/lawyer-log';
import { LawyerSignPage } from '../pages/lawyer-sign/lawyer-sign';
//import { AngularFireAuth } from 'angularfire2/auth';

  /*
  var config = {
    apiKey: "AIzaSyBpbpZ9ViNgXB4KevUaFOEoBs9yXhtXWdk",
    authDomain: "ionicapp-37de2.firebaseapp.com",
    databaseURL: "https://ionicapp-37de2.firebaseio.com",
    projectId: "ionicapp-37de2",
    storageBucket: "ionicapp-37de2.appspot.com",
    messagingSenderId: "497810205579"
  };
  */

  /*
    var1 config = {
    apiKey: "AIzaSyDtVSxEmYCOzyMGfRGqtLfdQ4fz1f6szLc",
    authDomain: "lawyerdatabase.firebaseapp.com",
    databaseURL: "https://lawyerdatabase.firebaseio.com",
    projectId: "lawyerdatabase",
    storageBucket: "lawyerdatabase.appspot.com",
    messagingSenderId: "581229497300"
  };

  */
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignupPage,
    LoginPage,
    LawyerLogPage,
    LawyerSignPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    //AngularFireModule.initializeApp(config)
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireModule.initializeApp(FIREBASE_CONFIG1),
    //AngularFireAuth,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignupPage,
    LoginPage,
    LawyerLogPage,
    LawyerSignPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
