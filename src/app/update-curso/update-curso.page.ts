import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Curso } from '../entidades';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoService } from '../Servicio/Curso/curso.service';

@Component({
  selector: 'app-update-curso',
  templateUrl: './update-curso.page.html',
  styleUrls: ['./update-curso.page.scss'],
})
export class UpdateCursoPage implements OnInit {

  @Input() cursoVentanaUpdate: any;
  cursoVU = new Curso

  constructor(private modalCtrl: ModalController,
    private fb: FormBuilder,
    private cursoServicio: CursoService,
    private toast: ToastController,) { }

  newCursoRegisterForm: FormGroup = this.fb.group({
    'nombreCurso': ['', [Validators.required]],
    'descripcionCurso': ['', [Validators.required]],
  })


  ngOnInit() {
    this.cursoVU = this.cursoVentanaUpdate
    console.log(this.cursoVU.codigoCurso)
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  updateCliente() {
    if (!this.newCursoRegisterForm.valid) {
      // return false;
      this.mostrarMensaje("Ingrese datos");
    } else {
      this.newCursoRegisterForm.value.codigoCurso = this.cursoVU.codigoCurso;
      this.cursoServicio.updateCurso(this.newCursoRegisterForm.value).subscribe(
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
