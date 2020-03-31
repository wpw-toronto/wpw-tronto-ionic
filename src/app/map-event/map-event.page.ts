import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent} from 'ngx-ionic-image-viewer';
import * as firebase from 'firebase/app';
import 'firebase/storage';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-map-event',
  templateUrl: './map-event.page.html',
  styleUrls: ['./map-event.page.scss'],
})
export class MapEventPage implements OnInit {

  // Loaded Image url
  public loadedImgSrc :string = null;

  constructor(
    public modalController: ModalController,
    public afAuth: AngularFireAuth)
  {
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

  getLoadedImgSrc() {
    return this.loadedImgSrc;
  }

  async getMapImage() {
    // Points to the root reference
    let storageRef = firebase.storage().ref();
    // Create a reference to the file we want to download
    let starsRef = storageRef.child('WPW_2020_Site GuideMap.png');

    // Get the download URL
    await starsRef.getDownloadURL().then(function (url) {
      // Insert url into an <img> tag to "download"
      let mapEventImg = document.getElementById("mapEventImg") as HTMLImageElement;
      mapEventImg.src = url;

      this.loadedImgSrc = url;
    }.bind(this)).catch(function (error) {

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


  ngOnInit() {
    this.getMapImage();
  }
}
