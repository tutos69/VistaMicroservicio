import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { CursoService } from '../Servicio/Curso/curso.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit  {


  newCursoRegisterForm: FormGroup = this.fb.group({
    'codigoCurso': ['', [Validators.required]],
    'nombreCurso': ['', [Validators.required]],
    'descripcionCurso': ['', [Validators.required]],
  })

  ngOnInit() {
    console.log("entra")

  }


  limpiarInput() {
    this.newCursoRegisterForm.reset();

  }


  constructor( private fb: FormBuilder,
    private toast: ToastController,
    private cursoService: CursoService,) {}


  registroNewCurso() {
    if (!this.newCursoRegisterForm.valid) {
      // return false;
      console.log(this.newCursoRegisterForm.value.name)
      console.log(this.newCursoRegisterForm.value.description)
      this.mostrarMensaje("Ingrese datos");
    } else {
      this.cursoService.newCurso(this.newCursoRegisterForm.value).subscribe(
        (data) => {
          // console.log('Hola', data);
          // this.ruta.navigate(['login'])
          // this.listarCliente()
          this.mostrarMensaje("Curso Creado");
          this.limpiarInput()


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
