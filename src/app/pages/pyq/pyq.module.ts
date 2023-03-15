import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyqPageRoutingModule } from './pyq-routing.module';

import { PyqPage } from './pyq.page';
// import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyqPageRoutingModule,
      
  ],
  declarations: [PyqPage]
})
export class PyqPageModule {}
