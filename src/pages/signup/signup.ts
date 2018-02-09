import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
//import { FIREBASE_CONFIG } from './app.firebase.config';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { registerLocaleData } from '@angular/common';
@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html',
}) 
export class SignupPage {

  arrayData = []

  userName

  userLastname 

  userCellphone

  userEMail

  userAddress

  userPassword

  constructor(public navCtrl: NavController, private firedatab: AngularFireDatabase, 
    private angularFireauth: AngularFireAuth, public navParams: NavParams) {
    this.firedatab.list("/userDataBase/").subscribe(_data => {
      this.arrayData = _data;

      console.log(this.arrayData);

    });

  }
  btnAddClicked(){
    this.firedatab.list("/userDataBase/").push(this.userName)
    this.firedatab.list("/userDataBase/").push(this.userLastname)
    this.firedatab.list("/userDataBase/").push(this.userCellphone)
    this.firedatab.list("/userDataBase/").push(this.userAddress)
    //this.firedatab.list("/userDataBase/").push(this.userEMail)
    //this.firedatab.list("/userDataBase/").push(this.userPassword)
    this.angularFireauth.auth.createUserWithEmailAndPassword(this.userEMail, this.userPassword);
  }  
}
