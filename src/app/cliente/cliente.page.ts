import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cliente } from '../entidades';
import { UpdateClientePage } from '../update-cliente/update-cliente.page';
import { ClienteService } from '../Servicio/Cliente/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  listaCliente: any = [];

  constructor(private modalCtrl: ModalController,
    private clienteService: ClienteService,) { }


  ngOnInit() {
    this.listarClientes();
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  async updateCliente(cliente: Cliente){
    // async updateCliente(){
    const modal = await this.modalCtrl.create({
      component: UpdateClientePage,
      componentProps: {
        'clienteVentanaUpdate': cliente,
      }
    });

    await modal.present();

    await modal.onDidDismiss();
    this.listarClientes();
  }

  eliminarCliente(cedula: String) {
    Swal.fire({
      title: '?',
      heightAuto: false,
      text: "¿Está seguro que quiere eliminar al cliente?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.deleteCliente(cedula).subscribe(data => {
          this.listarClientes()
        })
      }
    })
  }

  listarClientes() {
    this.listaCliente = [];

    this.clienteService.ListarClientes().subscribe(data => {
      // console.log(data + "Se lista");
      this.listaCliente = data;
      // this.ngOnInit()

    })
  }


}
