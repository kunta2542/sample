import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-east',
  templateUrl: './east.page.html',
  styleUrls: ['./east.page.scss'],
  standalone: false,
})
export class EastPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  goToSouth() { this.navCtrl.navigateForward('/south');}
  goToWest() {this.navCtrl.navigateBack('/west');}
}
