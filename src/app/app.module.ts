import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ClientPage } from '../pages/client/client';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
//import { Camera } from '@ionic-native/camera';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 

import { FIREBASE_CONFIG } from "./app.firebase.config";
import { FIREBASE_CONFIG1 } from "./app.firebase1.config";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LawyerLogPage } from '../pages/lawyer-log/lawyer-log';
import { LawyerSignPage } from '../pages/lawyer-sign/lawyer-sign';
import { LawyerPage } from '../pages/lawyer/lawyer';
import { UserClientPage } from '../pages/user-client/user-client';
import {Page1Page} from '../pages/page1/page1';
//import { LogOptionsPage } from '../pages/log-options/log-options';
import { AngularFireAuth } from 'angularfire2/auth';
import {FormsModule} from '@angular/forms';
// All of your imports that are already there
// import { ... } from '...';

// These are all imports required for Pro Client with Monitoring & Deploy,
// feel free to merge into existing imports above.
import { Pro } from '@ionic/pro';




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
 Pro.init('ea285148', {
  appVersion: '0.0.1'
})
@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

  @NgModule({
  declarations: [
    MyApp,
    ClientPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignupPage,
    LoginPage,
    LawyerLogPage,
    LawyerSignPage,
    UserClientPage,
    LawyerPage,
    Page1Page
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
    ClientPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignupPage,
    LoginPage,
    LawyerLogPage,
    Page1Page,
    LawyerSignPage,
    UserClientPage,
    LawyerPage
  ],
  providers: [
    StatusBar,
    Geolocation,
    GoogleMaps,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler
      },
      [{ provide: ErrorHandler, useClass: MyErrorHandler }]
    ]
})
export class AppModule {}
