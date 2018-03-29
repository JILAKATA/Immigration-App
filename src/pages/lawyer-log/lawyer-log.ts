import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { registerLocaleData } from '@angular/common';
import { AboutPage } from '../about/about';

/**
 * Generated class for the LoginPage page.
 */

@IonicPage()

@Component({
  selector: 'page-lawyer-log',
  templateUrl: 'lawyer-log.html',
})
export class LawyerLogPage{
  lawyerEMail   // lawyer email input
  lawyerPassword  //Lawyer password input
  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireauth: AngularFireAuth) {
  
  }
 /*Once Lawyer press button to login, system will authemticate that E-mail and Password
  matches with the one on our database cloud, provided when create the account */
login5(){
  const send = this.angularFireauth.auth.signInWithEmailAndPassword(this.lawyerEMail, this.lawyerPassword);
  
  /*If Email and Password matches, goes to the next page*/
  if(send){
    this.navCtrl.push(AboutPage);
  }
}
}
