import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { SignupPage } from '../signup/signup';
//import { LoginPage } from '../login/login';
//import { LawyerSignPage } from '../lawyer-sign/lawyer-sign';
//import { LawyerLogPage } from '../lawyer-log/lawyer-log';
import { LawyerPage } from '../lawyer/lawyer';
import { UserClientPage } from '../user-client/user-client';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  //Load to Signup page if user wants to signup
  load(){
    //   this.navCtrl.push(SignupPage)
       this.navCtrl.push(LawyerPage)
  }

  //Load to Login page if user has an account and wants to login
  load1(){
    this.navCtrl.push(UserClientPage)
  }

}

