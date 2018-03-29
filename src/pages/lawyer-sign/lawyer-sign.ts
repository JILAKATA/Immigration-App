import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
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

  /*Create an array called arrayData, to store all the information 
  entered by the Lawyer to create his account */
  arrayData = []

  /*Lawyer's inputs variables */
  lawyerName

  lawyerLastname 

  lawyerCellphone

  lawyerEMail

  lawyerCompanyname

  lawyerAddress

  lawyerPassword

  constructor(public navCtrl: NavController, private firedatab: AngularFireDatabase, 
    private angularFireauth: AngularFireAuth, public navParams: NavParams) {

    /* Here, the all the information will be store in the folder named
    lawyerDataBase.
    
    This folder will hold all the Lawyer's data only in firebase.
    All the inputs variable will go to the array "arrayData" to be store */
    this.firedatab.list("/lawyerDataBase/").subscribe(_data => {
      this.arrayData = _data;

      console.log(this.arrayData);

    });

  }

  /*This function will push all the data in Firebase entered by the lawyer
  as soon as press the button */
  btnAddClicked1(){
    this.firedatab.list("/lawyerDataBase/").push(this.lawyerName)
    this.firedatab.list("/lawyerDataBase/").push(this.lawyerLastname)
    this.firedatab.list("/lawyerDataBase/").push(this.lawyerCellphone)
    this.firedatab.list("/lawyerDataBase/").push(this.lawyerAddress)
    this.firedatab.list("/lawyerDataBase/").push(this.lawyerCompanyname)

    /*This particular statement will store the email and password in a different 
    folder in the data base, to authenticate email and password when Lawyer wants to
    login */
    this.angularFireauth.auth.createUserWithEmailAndPassword(this.lawyerEMail, this.lawyerPassword);
  } 
}
