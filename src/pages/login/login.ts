import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { registerLocaleData } from '@angular/common';
import { ClientPage } from '../client/client';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userEMail
  userPassword
  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireauth: AngularFireAuth) {
  
  }
 /*
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 */
login(){
  /*this.angularFireauth.auth.createUserWithEmailAndPassword(this.userEMail, this.userPassword);*/
  const send = this.angularFireauth.auth.signInWithEmailAndPassword(this.userEMail, this.userPassword);
  if(send){
    this.navCtrl.push(ClientPage);
  }
}
}
