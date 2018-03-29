import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { LawyerSignPage } from '../lawyer-sign/lawyer-sign';
import { LawyerLogPage } from '../lawyer-log/lawyer-log';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  //Load to Signup page if user wants to signup
  load(){
       this.navCtrl.push(SignupPage)
       //this.navCtrl.push(LoginPage)
  }

  //Load to Login page if user has an account and wants to login
  load1(){
    this.navCtrl.push(LoginPage)
  }

  //Load if lawyer wants to create an account
  load3(){
    this.navCtrl.push(LawyerSignPage)

  }

  //Load to Lawyer-log page if Lawyer has already an accounts
  load2(){
    this.navCtrl.push(LawyerLogPage)

  }
}

