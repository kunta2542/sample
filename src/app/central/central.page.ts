import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-central',
  templateUrl: './central.page.html',
  styleUrls: ['./central.page.scss'],
  standalone: false,
})
export class CentralPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  goToNort() { this.navCtrl.navigateForward('/north');}
  goHome() {this.navCtrl.navigateRoot('/home');}
}
