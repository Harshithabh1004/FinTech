import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonLabel, IonFooter, IonTabBar, IonTabButton } from '@ionic/angular/standalone';
import { IonicSlides } from '@ionic/angular';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonTabButton, IonTabBar, IonFooter, IonLabel, IonIcon, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ReactiveFormsModule,RouterLink]
})
export class DashboardPage implements OnInit, AfterViewInit{

  @Input() slides: any[] = [];
  swiperModules = [IonicSlides];
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  constructor() { }

  ngOnInit() {}

  onSlideChange(event: any) {
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
    console.log('event', event);
  }
  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
    });
  }

  openSavingsAccount() {
    console.log('Open Savings Account Clicked');
  }

}
