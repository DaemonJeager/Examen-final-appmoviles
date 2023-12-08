
import { NavController } from '@ionic/angular';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})




export class Page2Component implements AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef;

  ngAfterViewInit(): void {
    this.activateCamera();
  }

  public personaje: any;
  nombreUsuario: string = '';

  activateCamera(): void {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        this.videoElement.nativeElement.srcObject = stream;
        this.videoElement.nativeElement.play();
      });
    }
  }


  constructor(private navCtrl: NavController) { }

  navigateBack() {
    this.navCtrl.navigateBack('/home');
  }
}