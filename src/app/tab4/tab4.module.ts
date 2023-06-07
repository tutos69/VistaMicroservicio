import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import { ClientePage } from '../cliente/cliente.page';
import { ClientePageModule } from '../cliente/cliente.module';
import { CursoPageModule } from '../curso/curso.module';
import { InscripcionPageModule } from '../inscripcion/inscripcion.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ClientePageModule,
    CursoPageModule,
    InscripcionPageModule,
    Tab4PageRoutingModule
  ],
  exports:[Tab4Page],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
