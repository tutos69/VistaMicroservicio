import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Inscripcion } from '../entidades';
import { UpdateInscripcionPage } from '../update-inscripcion/update-inscripcion.page';
import Swal from 'sweetalert2';
import { InscripcionService } from '../Servicio/Inscripcion/inscripcion.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.page.html',
  styleUrls: ['./inscripcion.page.scss'],
})
export class InscripcionPage implements OnInit {
  listaInscripcion: any = [];

  constructor(private modalCtrl: ModalController,
    private inscripcionService: InscripcionService,) { }

  ngOnInit() {
    this.listarInscrips()
  }
  regresar() {
    this.modalCtrl.dismiss();
  }


  async updateInscripcion(inscripcion: Inscripcion){
    // async updateInscripcion(){
      const modal = await this.modalCtrl.create({
        component: UpdateInscripcionPage,
        componentProps: {
          'inscripcionVentanaUpdate': inscripcion,
        }
      });

      await modal.present();

      await modal.onDidDismiss();
      this.listaInscripcion();
  }

  eliminarInscripcion(idInst: Number){

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
        this.inscripcionService.deleteInscrip(idInst).subscribe(data => {
          this.listarInscrips()
        })
      }
    })
  }


  listarInscrips() {
    this.listaInscripcion = [];

    this.inscripcionService.ListarInscrip().subscribe(data => {
      // console.log(data + "Se lista");
      this.listaInscripcion = data;
      // this.ngOnInit()

    })
  }

}
