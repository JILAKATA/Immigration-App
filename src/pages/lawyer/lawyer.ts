import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LawyerSignPage } from '../lawyer-sign/lawyer-sign';
import { LawyerLogPage } from '../lawyer-log/lawyer-log';
/**
 * Generated class for the LawyerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lawyer',
  templateUrl: 'lawyer.html',
})
export class LawyerPage{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //Load if lawyer wants to create an account
  load3(){
    this.navCtrl.push(LawyerSignPage)

  }

  //Load to Lawyer-log page if Lawyer has already an accounts
  load2(){
    this.navCtrl.push(LawyerLogPage)

  }
 // ionViewDidLoad() {
   // console.log('ionViewDidLoad LawyerPage');
 // }

}
