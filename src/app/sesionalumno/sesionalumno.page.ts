import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

interface Usuario {
  userName: string;
  userPass: string;
}

@Component({
  selector: 'app-sesionalumno',
  templateUrl: './sesionalumno.page.html',
  styleUrls: ['./sesionalumno.page.scss'],
})

export class SesionalumnoPage implements OnInit {
  formularioLogin: FormGroup;
  loginForm: any;

  constructor(private router: Router, private toastController: ToastController, private StateService: StateService, private fb: FormBuilder) {
    this.formularioLogin = this.fb.group({
      userName: [''],
      userPass: ['']
    });
  }

  async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  ngOnInit() {}

  guardarDatosAlumno() {
    const nombreUsuarioAutenticado = {
      nombre: this.formularioLogin.get('userName')?.value,
      pass: this.formularioLogin.get('userPass')?.value
    }
    if (nombreUsuarioAutenticado.nombre.trim() == '' || nombreUsuarioAutenticado.pass.trim() == '') {
      this.mostrarMensaje('Por favor, completa todos los campos.');
    }
    else {
      console.log(nombreUsuarioAutenticado);
      console.log("Usuario iniciado correctamente");
      this.StateService.setNombreUsuario = nombreUsuarioAutenticado.nombre;
      this.StateService.setUserIsLogged(true);
      this.router.navigate(['/home']);
    }
  }
}