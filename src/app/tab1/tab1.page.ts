import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetailsModalComponent } from '../modals/details-modal/details-modal.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  userInfo: any = {
    branch: '',
    college: '',
    year:'',

  }
  constructor(
    private router: Router,
    private modalCtrl: ModalController
    
  ) {
  }
  async onClick(type: any) {
    // console.log(type)
    this.router.navigate(['/subjects'], { state: { user: this.userInfo } });
    //  const modal = await this.modalCtrl.create({
    //   component: DetailsModalComponent,
    //   cssClass: 'DeliveryDayPreference-component-css',
    //   componentProps: {
      
    //   },
    // });
    // modal.present();
    // const { data } = await modal.onWillDismiss();
  }
  submit() {
    // console.log(this.userInfo)
    this.modalCtrl.dismiss()
     this.router.navigate(['/subjects'],{state:{user: this.userInfo}});
    //  var data = {
    //    college: college,
    //    branch: branch,
    //    year:year,
    // };
}
}
