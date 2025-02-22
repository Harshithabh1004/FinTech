import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Injectable } from '@angular/core';

import { Preferences } from '@capacitor/preferences';
@Component({
  selector: 'app-stoarge-service',
  templateUrl: './stoarge-service.page.html',
  styleUrls: ['./stoarge-service.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StoargeServicePage implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async setStorage(key: any, value: any) {
    return Preferences.set({
      key,
      value
    });
  }

  getStorage(key: any) {
    return Preferences.get({key});
  }

  removeStorage(key: any) {
    return Preferences.remove({key});
  }

}
