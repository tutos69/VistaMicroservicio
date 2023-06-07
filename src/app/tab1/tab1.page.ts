import { Component, OnInit } from '@angular/core';
import { CursoService } from '../Servicio/Curso/curso.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ClienteService } from '../Servicio/Cliente/cliente.service';
import { Cliente, Inscripcion } from '../entidades';
import { InscripcionService } from '../Servicio/Inscripcion/inscripcion.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  listaCurso: any = [];
  cliente: any = "";

  newInscRegisterForm: FormGroup = this.fb.group({
    'cedula': ['', [Validators.required]],
    'codigoCurso': ['', [Validators.required]],
    'nombreCurso': ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder,
    private toast: ToastController,
    private cursoService: CursoService,
    private clienteService: ClienteService,
    private insService: InscripcionService) { }

  ngOnInit() {
    this.listarCursos();
  }

  limpiarInput() {
    this.newInscRegisterForm.reset();

  }

  registroNewIns() {
    if (!this.newInscRegisterForm.valid) {
      this.mostrarMensaje("Ingrese datos");
    } else {
      const cedula = this.newInscRegisterForm.value.cedula;
      this.buscarCliente(cedula)
        .then((cliente: Cliente) => {
          if (cliente == null) {
            this.mostrarMensaje("No se encuentra cliente");
          } else {
            this.insService.newInscrip(this.newInscRegisterForm.value).subscribe(
              (data) => {
                this.mostrarMensaje("Inscripcion Creada");
                this.limpiarInput()

              },
              (error) => {
                this.mostrarMensaje(error.error);
              }
            );
          }
        })
        .catch((error) => {
          this.mostrarMensaje("No se encuentra cliente");
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

  buscarCliente(cedula: string): Promise<Cliente> {
    return new Promise<Cliente>((resolve, reject) => {
      this.clienteService.findbyCedula(cedula).subscribe(
        (data: Cliente) => {
          resolve(data);
        },
        (error) => {
          reject(null);
        }
      );
    });
  }


  listarCursos() {
    this.listaCurso = [];

    this.cursoService.ListarCursor().subscribe(data => {
      // console.log(data + "Se lista");
      this.listaCurso = data;
      // this.ngOnInit()

    })
  }


  handleRefresh(event: any) {
    this.listarCursos()
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };



}
