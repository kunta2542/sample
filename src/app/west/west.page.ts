import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-west',
  templateUrl: './west.page.html',
  styleUrls: ['./west.page.scss'],
  standalone: false,
})
export class WestPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  goToEast() { this.navCtrl.navigateForward('/east');}
  goToNorthEast() {this.navCtrl.navigateBack('/northeast');}
}
