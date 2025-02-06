import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-north',
  templateUrl: './north.page.html',
  styleUrls: ['./north.page.scss'],
  standalone : false,
})
export class NorthPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  goToNorthEast() { this.navCtrl.navigateForward('/northeast');}
  goToCentral() {this.navCtrl.navigateBack('/central');}
}
