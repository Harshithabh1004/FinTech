import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeSharp,
  notificationsCircleSharp,
  globeSharp,
  cashSharp,
  cardSharp,
  closeCircleSharp,
  trendingUpSharp,
  chevronForwardSharp,
  chevronBackSharp,
  starOutline,
  personCircleOutline,
  shieldCheckmarkOutline,
  settingsOutline,
  happyOutline,
  helpCircleOutline,
  chevronForwardOutline
} from 'ionicons/icons';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    this.addAllIcons();
   }
  addAllIcons() {
    addIcons({
      cardSharp,
      homeSharp,
      cashSharp,
      globeSharp,
      notificationsCircleSharp,
      closeCircleSharp,
      trendingUpSharp,
      chevronForwardSharp,
      chevronBackSharp,
      starOutline,
      personCircleOutline,
      helpCircleOutline,
      settingsOutline,
      shieldCheckmarkOutline,
      happyOutline,
      chevronForwardOutline
    });
  }
}
