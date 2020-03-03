import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Map-Event',
      url: '/map-event',
      icon: 'map'
    },
    {
      title: 'Map-Route',
      url: '/map-route',
      icon: 'map'
    },
    {
      title: 'Schedule-Event',
      url: '/schedule-event',
      icon: 'list'
    },
    {
      title: 'Schedule-Performance',
      url: '/schedule-performance',
      icon: 'musical-notes'
    },
    {
      title: 'Foodtruck',
      url: '/foodtruck',
      icon: 'pizza'
    },
    {
      title: 'Donate',
      url: '/donate',
      icon: 'cash'
    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'information-circle-outline'
    },
    {
      title: 'Sign out',
      url: '/signout',
      icon: 'exit'
    }
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public afAuth: AngularFireAuth,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.platform.backButton.subscribeWithPriority(9999, () => {
        document.addEventListener('backbutton', function (event) {
          event.preventDefault();
          event.stopPropagation();
          console.log('hello');
        }, false);
      });
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }
}
