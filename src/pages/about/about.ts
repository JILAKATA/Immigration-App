import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { registerLocaleData } from '@angular/common';

declare var google: any;
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  LatLng
 } from '@ionic-native/google-maps';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  map: any;
  markers:any;
  arrayData = []
  //latitude1
  //longitude3
//userName

 // userLastname

  constructor(public navCtrl: NavController, public geolocation: Geolocation, public platform:Platform, private firedatab: AngularFireDatabase, 
    private angularFireauth: AngularFireAuth) {

      this.firedatab.list("/userDataBase/").subscribe(_data => {
        this.arrayData = _data;
  
        //console.log(this.arrayData);
  
      });
    }

  ionViewWillEnter(){
    this.platform.ready().then(() => {
      this.initPage();
    });
  }

  initPage() {
    this.geolocation.getCurrentPosition().then(result => {
      this.loadMap(result.coords.latitude, result.coords.longitude);
    });
  }


  private loadMap(lat, lng) {
      let latLng = new google.maps.LatLng(lat, lng);
      //this.latitude1 = lat
      //this.longitude3 = lng
      let mapOptions = {
        center: latLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
      };

      let element = document.getElementById('map');

      this.map = new google.maps.Map(element, mapOptions);
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
      this.firedatab.list("/userDataBase/").push(lat)
      this.firedatab.list("/userDataBase/").push(lng)
    }

}
