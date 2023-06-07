import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Cliente } from '../entidades';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../Servicio/Cliente/cliente.service';


@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.page.html',
  styleUrls: ['./update-cliente.page.scss'],
})
export class UpdateClientePage implements OnInit {

  constructor(private modalCtrl: ModalController,
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private toast: ToastController,) { }

  @Input() clienteVentanaUpdate: any;
  clienteVU = new Cliente

  newClienteRegisterForm: FormGroup = this.fb.group({

    'nombres': ['', [Validators.required]],
    'email': ['', [Validators.required]],
  })


  ngOnInit() {
    this.clienteVU = this.clienteVentanaUpdate
  }



  regresar() {
    this.modalCtrl.dismiss();
  }

  updateCliente() {
    if (!this.newClienteRegisterForm.valid) {
      // return false;
      this.mostrarMensaje("Ingrese datos");
    } else {
      this.newClienteRegisterForm.value.cedula = this.clienteVU.cedula;
      this.clienteService.updateCliente(this.newClienteRegisterForm.value).subscribe(
        (data) => {
          // console.log('Hola', data);
          // this.ruta.navigate(['login'])
          this.modalCtrl.dismiss();

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
