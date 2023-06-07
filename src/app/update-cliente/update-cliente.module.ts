import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateClientePageRoutingModule } from './update-cliente-routing.module';

import { UpdateClientePage } from './update-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,

    UpdateClientePageRoutingModule
  ],exports:[
    UpdateClientePage
  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  ,
  declarations: [UpdateClientePage]
})
export class UpdateClientePageModule {}
