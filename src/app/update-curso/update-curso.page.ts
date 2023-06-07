import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-curso',
  templateUrl: './update-curso.page.html',
  styleUrls: ['./update-curso.page.scss'],
})
export class UpdateCursoPage implements OnInit {

  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

}
