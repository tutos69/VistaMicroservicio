import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Curso } from '../entidades';
import { UpdateCursoPage } from '../update-curso/update-curso.page';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  listaCurso: any = [];

  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  // updateCurso(curso: Curso) {
  async updateCurso() {
    const modal = await this.modalCtrl.create({
      component: UpdateCursoPage,
      // componentProps: {
      //   'clienteVentanaUpdate': cliente,
      // }
    });

    await modal.present();

    await modal.onDidDismiss();
    this.listaCurso();
  }

  eliminarCurso(curso: Curso) {

  }

}
