import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonInput, IonItem, IonList, IonText, IonFab, IonFabButton, IonIcon, IonListHeader, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonButton, IonInput, IonItem, IonList, IonText, IonFab, IonFabButton, IonIcon, IonListHeader, IonContent,RouterLink]
})
export class UserLoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async onLogin() {
    const trimmedUsername = this.username.trim();
    const trimmedPassword = this.password.trim();

    if (trimmedUsername === 'Harshithabh' && trimmedPassword === 'harshi10@') {
      this.router.navigate(['/home/dashboard']);
    } else {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Invalid Username or Password',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
