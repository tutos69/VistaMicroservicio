import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Inscripcion } from '../entidades';
import { UpdateInscripcionPage } from '../update-inscripcion/update-inscripcion.page';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.page.html',
  styleUrls: ['./inscripcion.page.scss'],
})
export class InscripcionPage implements OnInit {
  listaInscripcion: any = [];

  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {
  }
  regresar() {
    this.modalCtrl.dismiss();
  }


  // async updateInscripcion(inscripcion: Inscripcion){
    async updateInscripcion(){
      const modal = await this.modalCtrl.create({
        component: UpdateInscripcionPage,
        // componentProps: {
        //   'clienteVentanaUpdate': cliente,
        // }
      });

      await modal.present();

      await modal.onDidDismiss();
      this.listaInscripcion();
  }

  eliminarInscripcion(inscripcion: Inscripcion){

  }


}
