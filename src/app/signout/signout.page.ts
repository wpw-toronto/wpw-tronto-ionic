import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.page.html',
  styleUrls: ['./signout.page.scss'],
})
export class SignoutPage implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  signOut()
  {
    this.afAuth.auth.signOut().then(() =>
    {
      this.router.navigateByUrl("/loginpage");
    });
  }

  ngOnInit() {}

  ionViewDidEnter()
  {
    // If the time is not set or less then 400, error on next login.
    // Do not know why for now.
    setTimeout(() => { this.signOut(); }, 400);
  }

}
