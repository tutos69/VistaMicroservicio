import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-inscripcion',
  templateUrl: './update-inscripcion.page.html',
  styleUrls: ['./update-inscripcion.page.scss'],
})
export class UpdateInscripcionPage implements OnInit {


  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {
  }

  regresar() {
    this.modalCtrl.dismiss();
  }


}
