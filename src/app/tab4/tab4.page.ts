import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ClientePage } from '../cliente/cliente.page';
import { CursoPage } from '../curso/curso.page';
import { InscripcionPage } from '../inscripcion/inscripcion.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private modalCtrl: ModalController,
    private ruta: Router,) { }

  ngOnInit() {
  }

  public async VistaCliente() {
    console.log("holas")
    const modal = await this.modalCtrl.create({
      component: ClientePage
    });

    await modal.present();

    await modal.onDidDismiss();

  }

  public async vistaCurso() {
    console.log("holas")
    const modal = await this.modalCtrl.create({
      component: CursoPage
    });

    await modal.present();

    await modal.onDidDismiss();

  }

  public async vistaInscripcion() {
    console.log("holas")
    const modal = await this.modalCtrl.create({
      component: InscripcionPage
    });

    await modal.present();

    await modal.onDidDismiss();

  }

}
