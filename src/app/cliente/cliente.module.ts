import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePageRoutingModule } from './cliente-routing.module';

import { ClientePage } from './cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ClientePageRoutingModule
  ],
  exports:[
    ClientePage
  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  ,
  declarations: [ClientePage]
})
export class ClientePageModule {}
