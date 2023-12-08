import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';
import { StateService } from '../service/state.service';


interface Usuario {
  userName: string;
  userPass: string;
}

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  [x: string]: any;
  formulariorestablecer: FormGroup;

  constructor(private router: Router,private fb: FormBuilder,private toastController: ToastController, private StateService: StateService) {
    this.formulariorestablecer = this.fb.group({
      userPass: ['']
    })
   }

  

  async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  ngOnInit() {
  }
  restablecer(){  
    const restablecer = {
      pass: this.formulariorestablecer.get('userPass')?.value
    }
      if (restablecer.pass.trim() == '') {
        this.mostrarMensaje('Por favor, completa todos los campos.');
      }
      else {

        console.log(restablecer);
        console.log("Se ha enviado un correo para restablecer la contraseña");
        this.StateService.setNombreUsuario = restablecer.pass;
        this.router.navigate(['/home']);
      }

    

  }

}

  
