import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateInscripcionPageRoutingModule } from './update-inscripcion-routing.module';

import { UpdateInscripcionPage } from './update-inscripcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,

    UpdateInscripcionPageRoutingModule
  ],
  exports:[
    UpdateInscripcionPage
  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [UpdateInscripcionPage]
})
export class UpdateInscripcionPageModule {}
