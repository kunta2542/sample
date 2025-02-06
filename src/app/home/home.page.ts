import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,

})
export class HomePage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  goToCentral() { this.navCtrl.navigateForward('/central');}
  goToNort() { this.navCtrl.navigateForward('/north');}
  goToNortEast() { this.navCtrl.navigateForward('/northeast');}
  goToWest() { this.navCtrl.navigateForward('/west');}
  goToEast() { this.navCtrl.navigateForward('/east');}
  goToSouth() { this.navCtrl.navigateForward('/south');}
}
