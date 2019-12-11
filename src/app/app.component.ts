import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private router: Router,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.appPages = [
      {
        title: 'Home',
        url: '/tabs',
        icon: 'home',
      },
      {
        title: 'About',
        url: '/about',
        icon: 'settings',
      }
    ];
  }

  openPage(page) {
    this.router.navigate([page.url]);
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
