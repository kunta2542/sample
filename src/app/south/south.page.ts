import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-south',
  templateUrl: './south.page.html',
  styleUrls: ['./south.page.scss'],
  standalone: false,
})
export class SouthPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  goHome() {this.navCtrl.navigateRoot('/home');}
  goToEast() { this.navCtrl.navigateBack('/east');}

}
