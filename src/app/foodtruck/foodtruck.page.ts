import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';


@Component({
  selector: 'app-foodtruck',
  templateUrl: './foodtruck.page.html',
  styleUrls: ['./foodtruck.page.scss'],
})
export class FoodtruckPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Points to the root reference
    var storageRef = firebase.storage().ref();
    // Create a reference to the file we want to download
    var starsRef = storageRef.child('food_truck_sample.jpg');

    // Get the download URL
    starsRef.getDownloadURL().then(function (url) {
      // Insert url into an <img> tag to "download"
      
      var foodTruck1Img = document.getElementById("foodTruck1Img") as HTMLImageElement;
      var foodTruck2Img = document.getElementById("foodTruck2Img") as HTMLImageElement;
      var foodTruck3Img = document.getElementById("foodTruck3Img") as HTMLImageElement;

      foodTruck1Img.src = url;
      foodTruck2Img.src = url;
      foodTruck3Img.src = url;

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
