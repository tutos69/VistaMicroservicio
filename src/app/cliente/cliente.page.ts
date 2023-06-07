import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cliente } from '../entidades';
import { UpdateClientePage } from '../update-cliente/update-cliente.page';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  listaCliente: any = [];

  constructor(private modalCtrl: ModalController,) { }


  ngOnInit() {
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  // async updateCliente(cliente: Cliente){
    async updateCliente(){
    const modal = await this.modalCtrl.create({
      component: UpdateClientePage,
      // componentProps: {
      //   'clienteVentanaUpdate': cliente,
      // }
    });

    await modal.present();

    await modal.onDidDismiss();
    this.listaCliente();
  }

  eliminarCliente(cliente: Cliente){

  }


}
