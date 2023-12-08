import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as QRCode from 'qrcode';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public personaje: any;
  nombreUsuario: string = ''
  idUsuario: {qrCode: string}[] = [];

  
  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getCharacters().subscribe(
      (data) => {
      console.log(data);
      this.personaje = data.users;
      localStorage.setItem('Personaje', JSON.stringify(data.users));

      this.personaje.forEach((estudiante: any) => {
        QRCode.toDataURL(estudiante.id.toString())
          .then((url: string) => {
            console.log(`Generated QR Code for ${estudiante.name}: ${url}`);
            // Aquí puedes hacer algo con la URL del código QR, como asignarla a una propiedad del estudiante
            estudiante.qrCodeUrl = url;
          })
          .catch((err: any) => {
            console.error(`Failed to generate QR Code for ${estudiante.name}: ${err}`);
          });
      });
  })
}}




