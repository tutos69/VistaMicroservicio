import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscripcionPageRoutingModule } from './inscripcion-routing.module';

import { InscripcionPage } from './inscripcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscripcionPageRoutingModule
  ],
  exports: [
    InscripcionPage
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [InscripcionPage]
})
export class InscripcionPageModule { }
