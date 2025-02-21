import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonList,IonListHeader,IonButton,IonText,IonLabel,IonButtons,IonIcon} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonList,IonListHeader,IonText,IonLabel,RouterLink,IonButtons,IonIcon],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back(); // Navigates to the previous page dynamically
  }
}
