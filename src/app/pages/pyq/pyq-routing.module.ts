import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyqPage } from './pyq.page';

const routes: Routes = [
  {
    path: '',
    component: PyqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyqPageRoutingModule {}
