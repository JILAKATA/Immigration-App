import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { LawyerSignPage } from '../lawyer-sign/lawyer-sign';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  load(){
       this.navCtrl.push(SignupPage)
       //this.navCtrl.push(LoginPage)
  }
  load1(){
    this.navCtrl.push(LoginPage)
  }
  load3(){
    this.navCtrl.push(LawyerSignPage)

  }
}

