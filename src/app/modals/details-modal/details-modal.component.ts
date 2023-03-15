import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent  implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() { }
  action(arg: any) {
    return this.modalCtrl.dismiss(arg);

  }

}
