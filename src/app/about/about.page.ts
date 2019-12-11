import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }

  ionViewWillEnter() {
    console.log('About will Enter.');
  }

  ionViewWillLeave() {
    console.log('About will Leave.');
  }

  ngOnInit() {
  }

}
