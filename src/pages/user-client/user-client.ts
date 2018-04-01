import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
/**
 * Generated class for the UserClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-client',
  templateUrl: 'user-client.html',
})
export class UserClientPage{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  //ionViewDidLoad() {
    //console.log('ionViewDidLoad UserClientPage');
  //}

}
