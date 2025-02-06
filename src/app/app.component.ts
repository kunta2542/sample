import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'หน้าหลัก',
      url: '/home',
      icon: 'home' },
    { title: 'ภาคกลาง',
      url: '/central',
      icon: 'location' },
    { title: 'ภาคเหนือ',
      url: '/north',
      icon: 'location' },
    { title: 'ภาคตะวันออกเฉี่ยงเหนือ',
      url: '/northeast',
      icon: 'location' },
    { title: 'ภาคตะวันตก',
      url: '/west',
      icon: 'location' },
    { title: 'ภาคตะวันออก',
      url: '/east',
      icon: 'location' },
    { title: 'ภาคใต้',
      url: '/south',
      icon: 'location' }
  ];

  constructor() {}
}
