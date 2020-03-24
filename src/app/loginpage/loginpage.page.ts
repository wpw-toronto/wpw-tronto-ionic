import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }

  successCallback(signInSuccessData) {
    console.log("Received with Success!");
    this.router.navigateByUrl("/home");
  }

  errorCallback(errorData) {
    console.log("Login Failed!");
  } 

  signOut()
  {
    // if (this.afAuth.auth.currentUser) {
    //   console.log("user is logged in");
      this.afAuth.auth.signOut().then(() => {
      });
    // }
  }

  ngOnInit() {
    this.signOut();
  }

}
