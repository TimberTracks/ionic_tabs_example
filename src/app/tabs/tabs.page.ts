import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

  ionViewWillEnter() {
    console.log('Tabs will Enter.');
  }

  ionViewWillLeave() {
    console.log('Tabs will Leave.');
  }

}
