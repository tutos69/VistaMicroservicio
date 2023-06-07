import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Curso } from '../entidades';
import { UpdateCursoPage } from '../update-curso/update-curso.page';
import { CursoService } from '../Servicio/Curso/curso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  listaCurso: any = [];

  constructor(private modalCtrl: ModalController,
    private cursoService: CursoService,) { }

  ngOnInit() {
    this.listarCursos();
  }

  regresar() {
    this.modalCtrl.dismiss();

  }

  async updateCurso(curso: Curso) {
  // async updateCurso() {
    const modal = await this.modalCtrl.create({
      component: UpdateCursoPage,
      componentProps: {
        'cursoVentanaUpdate': curso,
      }
    });

    await modal.present();

    await modal.onDidDismiss();
    this.listarCursos();
  }

  eliminarCurso(idCurso: String) {
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
        this.cursoService.deleteCurso(idCurso).subscribe(data => {
          this.listarCursos()
        })
      }
    })
  }

  listarCursos() {
    this.listaCurso = [];

    this.cursoService.ListarCursor().subscribe(data => {
      // console.log(data + "Se lista");
      this.listaCurso = data;
      // this.ngOnInit()

    })
  }
}
