import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
//import { FIREBASE_CONFIG } from './app.firebase.config';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { registerLocaleData } from '@angular/common'

/**
 * Generated class for the LawyerSignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lawyer-sign',
  templateUrl: 'lawyer-sign.html',
})
export class LawyerSignPage {

  //constructor(public navCtrl: NavController, public navParams: NavParams) {
 // }

//  ionViewDidLoad() {
  //  console.log('ionViewDidLoad LawyerSignPage');
  //}


  arrayData = []

  lawyerName

  lawyerLastname 

  lawyerCellphone

  lawyerEMail

  lawyerCompanyname

  lawyerAddress

  lawyerPassword

  constructor(public navCtrl: NavController, private firedatab: AngularFireDatabase, 
    private angularFireauth: AngularFireAuth, public navParams: NavParams) {
    this.firedatab.list("/lawyerDataBase/").subscribe(_data => {
      this.arrayData = _data;

      console.log(this.arrayData);

    });

  }
  btnAddClicked1(){
    this.firedatab.list("/lawyerDataBase/").push(this.lawyerName)
    this.firedatab.list("/lawyerDataBase/").push(this.lawyerLastname)
    this.firedatab.list("/lawyerDataBase/").push(this.lawyerCellphone)
    this.firedatab.list("/lawyerDataBase/").push(this.lawyerAddress)
    //this.firedatab.list("/lawyerDataBase/").push(this.lawyerEMail)
    //this.firedatab.list("/lawyerDataBase/").push(this.lawyerPassword)
    this.firedatab.list("/lawyerDataBase/").push(this.lawyerCompanyname)
    this.angularFireauth.auth.createUserWithEmailAndPassword(this.lawyerEMail, this.lawyerPassword);
  } 
}
