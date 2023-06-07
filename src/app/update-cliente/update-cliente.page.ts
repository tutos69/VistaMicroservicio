import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.page.html',
  styleUrls: ['./update-cliente.page.scss'],
})
export class UpdateClientePage implements OnInit {
  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {
  }


  regresar() {
    this.modalCtrl.dismiss();
  }


}
