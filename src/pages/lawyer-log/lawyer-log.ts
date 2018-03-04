import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { registerLocaleData } from '@angular/common';
import { AboutPage } from '../about/about';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lawyer-log',
  templateUrl: 'lawyer-log.html',
})
export class LawyerLogPage{
  lawyerEMail
  lawyerPassword
  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireauth: AngularFireAuth) {
  
  }
 /*
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 */
login5(){
  /*this.angularFireauth.auth.createUserWithEmailAndPassword(this.userEMail, this.userPassword);*/
  const send = this.angularFireauth.auth.signInWithEmailAndPassword(this.lawyerEMail, this.lawyerPassword);
  if(send){
    this.navCtrl.push(AboutPage);
  }
}
}
