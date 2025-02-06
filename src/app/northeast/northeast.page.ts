import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-northeast',
  templateUrl: './northeast.page.html',
  styleUrls: ['./northeast.page.scss'],
  standalone : false,
})
export class NortheastPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  goToWest() { this.navCtrl.navigateForward('/west');}
  goToNorth() {this.navCtrl.navigateBack('/north');}
}


