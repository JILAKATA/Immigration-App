import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Information } from '../../modules/information';
import { HomePage } from '../home/home';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
//import { FIREBASE_CONFIG } from './app.firebase.config';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { registerLocaleData } from '@angular/common';
@Component({
	selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [AngularFireAuth]
}) 
export class SignupPage {

  //arrayData = []
  information = {} as Information;

  //information.userName

  //userLastname 

  //userCellphone

  //userEMail

  //userAddress

  //userPassword

  constructor(public navCtrl: NavController, private firedatab: AngularFireDatabase, 
    private angularFireauth: AngularFireAuth, public navParams: NavParams, public afDatabase: AngularFireDatabase,private afAuth: AngularFireAuth) {
    //this.firedatab.list("/userDataBase/").subscribe(_data => {
      //this.information = _data;

      //console.log(this.arrayData);

    //});

  }
  async register(information: Information){
    const AddingLawyer = await this.afAuth.auth.createUserWithEmailAndPassword(information.userEMail, information.userPassword);
		console.log(AddingLawyer); 
        
		this.afAuth.authState.subscribe(auth => {
		this.afDatabase.object(`userDataBase/${auth.uid}`).set(this.information)
		.then(() => this.navCtrl.setRoot(HomePage));



		

})

  }

  
  //btnAddClicked(){
    //async register(information: Information)
    //this.firedatab.list("/userDataBase/").push(this.userName)
    //this.firedatab.list("/userDataBase/").push(this.userLastname)
    //this.firedatab.list("/userDataBase/").push(this.userCellphone)
    //this.firedatab.list("/userDataBase/").push(this.userAddress)
    //this.firedatab.list("/userDataBase/").push(this.userEMail)
    //this.firedatab.list("/userDataBase/").push(this.userPassword)
    //this.afAuth.authState.subscribe(auth => {
    //this.afDatabase.object('userDataBase/').update(this.information).then(()=>this.navCtrl.setRoot(HomePage));
    //this.angularFireauth.auth.createUserWithEmailAndPassword(this.information.userEMail, this.information.userPassword);
    //})    
  //}  
}