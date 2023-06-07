import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Inscripcion } from '../entidades';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoService } from '../Servicio/Curso/curso.service';
import { InscripcionService } from '../Servicio/Inscripcion/inscripcion.service';

@Component({
  selector: 'app-update-inscripcion',
  templateUrl: './update-inscripcion.page.html',
  styleUrls: ['./update-inscripcion.page.scss'],
})
export class UpdateInscripcionPage implements OnInit {

  @Input() inscripcionVentanaUpdate: any;
  inscripcionVU = new Inscripcion
  listaCurso: any = [];

  constructor(private modalCtrl: ModalController,
    private fb: FormBuilder,
    private cursoServicio: CursoService,
    private inscripcionService: InscripcionService,
    private toast: ToastController,) { }

  ngOnInit() {
    this.listarCursos();
    this.inscripcionVU = this.inscripcionVentanaUpdate
  }

  listarCursos() {
    this.listaCurso = [];

    this.cursoServicio.ListarCursor().subscribe(data => {
      // console.log(data + "Se lista");
      this.listaCurso = data;
      // this.ngOnInit()

    })
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  newInscRegisterForm: FormGroup = this.fb.group({
    'codigoCurso': ['', [Validators.required]],
    'nombreCurso': ['', [Validators.required]],
  })




  updateInscripcion() {
    if (!this.newInscRegisterForm.valid) {
      // return false;
      this.mostrarMensaje("Ingrese datos");
    } else {
      this.newInscRegisterForm.value.cedula = this.inscripcionVU.cedula;
      this.newInscRegisterForm.value.codigo = this.inscripcionVU.codigo;
      this.inscripcionService.updateInscripcion(this.newInscRegisterForm.value).subscribe(
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
