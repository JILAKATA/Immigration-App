/*This page is about to display the user geolocation as soon as they 
 login on the application.
 Later it will save on the data the user's current position, (latitude, longitude) */

import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation, Geoposition, GeolocationOptions } from '@ionic-native/geolocation';
import { AngularFireAuth } from 'angularfire2/auth';
import { registerLocaleData } from '@angular/common';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Information } from '../../modules/information';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
declare var google: any;
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions,
    CameraPosition, MarkerOptions, Marker, LatLng } from '@ionic-native/google-maps';

@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
  providers: [AngularFireAuth]
})


export class ClientPage {
  map: any;
  markers:any;
  options:GeolocationOptions;
  arrayData = [];
  information = {} as Information;
  longitude1
  latitude1

  constructor(public navCtrl: NavController, public geolocation: Geolocation, public platform:Platform, private firedatab: AngularFireDatabase, 
    private angularFireauth: AngularFireAuth, public afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth) {

     // this.firedatab.list("/userDataBase/").subscribe(_data => {
       // this.arrayData = _data;
  
      //});
    }

  ionViewWillEnter(){
    this.platform.ready().then(() => {
      this.initPage();
    });
  }
  /*This function will get the user's latitude and longitude*/
  initPage() {
    this.geolocation.getCurrentPosition().then(result => {
      this.loadMap(result.coords.latitude, result.coords.longitude);
    });
  }

  /* Adding this method to create a map */
  private loadMap(lat, lng) {
      let latLng = new google.maps.LatLng(lat, lng);

      /* This method is to add the marker to show the user exacly 
      location on the map.
      Also we will choose the type of Map and the zoom size */
      let mapOptions = {
        center: latLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
      };

      let element = document.getElementById('map');

      this.map = new google.maps.Map(element, mapOptions);
      
      /* This method will display a green marker icon, also if user clicks on the 
      green icon marker, it will display a message*/
      let marker = new google.maps.Marker({
        position: latLng,
        title: 'HERE I AM!!!',
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      })


      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h6>`+marker.title+`</h6>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      marker.setMap(this.map);
      this.longitude1.information = lng;
      this.latitude1.information = lat;
      /*In this two statements, we will send the latitude and longetude
      to the database on Firebase.
      The idea is to record the data so the Lawyer will have the client's
      location anywhere in the US*/
      //this.firedatab.list("/userDataBase/").push(lat)
      //this.firedatab.list("/userDataBase/").push(lng)
      this.afAuth.authState.subscribe(auth => {
        this.afDatabase.object(`userDataBase/${auth.uid}`).update(this.information);
    
    
    
        
    
    })
      
    }

}
//Page 89 MAxwell Book: Thomas Edison
//Thomas Jefferson words: Genious!!!!
//Genious is 1%, 99% is Persperation

//Nero plusticity, the brain can be shape
//We borned with a certains patterns in our life
//Habits, Thoughts Experiences, Music, Enviroments, reshape our brain

/*DNA triggers

DNA controls the biology of our body

We are not captive to Chemestry

Victor Frunckol Pg 91 Maxwell book
There is one thing cannt be taken away


CHAPTER2 */