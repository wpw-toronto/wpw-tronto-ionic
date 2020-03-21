import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';

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
    private fcm: FCM,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      // this.splashScreen.hide();

      this.fcm.getToken().then(token => {
        console.log(token);
      });

      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(token);
      });

      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });

      this.fcm.subscribeToTopic('WPW');

      
      this.platform.backButton.subscribeWithPriority(9999, () => {
        document.addEventListener('backbutton', function (event) {
          event.preventDefault();
          event.stopPropagation();
          // console.log('hello');
        }, false);
      });
    });
  }
}
