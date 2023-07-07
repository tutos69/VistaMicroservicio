import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { ClienteService } from '../Servicio/Cliente/cliente.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  newClienteRegisterForm: FormGroup = this.fb.group({
    'identificador': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder,
    private toast: ToastController,
    private clienteService: ClienteService,) { }

  limpiarInput() {
    this.newClienteRegisterForm.reset();

  }

  registroNewCliente() {
    if (!this.newClienteRegisterForm.valid) {
      // return false;

      this.mostrarMensaje("Ingrese datos");
    } else {
      this.clienteService.newCliente(this.newClienteRegisterForm.value).subscribe(
        (data) => {
          // console.log('Hola', data);
          // this.ruta.navigate(['login'])
          // this.listarCliente()
          this.mostrarMensaje("Usuario Creado");
          this.limpiarInput

        }, (error) => {
          // console.log('No vale ');
          this.mostrarMensaje(error.error);
        });
    }
  }

  async mostrarMensaje(mensaje: any) {
    const toast = await this.toast.create({
      position: 'top',
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }
}
