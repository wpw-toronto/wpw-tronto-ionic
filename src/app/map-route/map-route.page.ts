import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Component({
  selector: 'app-map-route',
  templateUrl: './map-route.page.html',
  styleUrls: ['./map-route.page.scss'],
})
export class MapRoutePage implements OnInit {
  constructor(public modalController: ModalController) {
  }

  async openViewer() {
    var mapEventImg = document.getElementById("mapEventImg") as HTMLImageElement;
    var imgToShow = mapEventImg.src;
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: imgToShow
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

  ngOnInit() {
    // Points to the root reference
    var storageRef = firebase.storage().ref();
    // Create a reference to the file we want to download
    var starsRef = storageRef.child('WPW_2020_RouteMap.png');

    // Get the download URL
    starsRef.getDownloadURL().then(function (url) {
      // Insert url into an <img> tag to "download"
      var mapEventImg = document.getElementById("mapEventImg") as HTMLImageElement;
      mapEventImg.src = url;
    }).catch(function (error) {

      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          console.log("File doesn't exist");
          // File doesn't exist
          break;

        case 'storage/unauthorized':
          console.log("User doesn't have permission to access the object");
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          console.log("User canceled the upload");
          // User canceled the upload
          break;

        case 'storage/unknown':
          console.log("Unknown error occurred, inspect the server response");
          // Unknown error occurred, inspect the server response
          break;
      }
    });
  }
}
