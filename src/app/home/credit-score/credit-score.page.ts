import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-credit-score',
  templateUrl: './credit-score.page.html',
  styleUrls: ['./credit-score.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink]
})
export class CreditScorePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
