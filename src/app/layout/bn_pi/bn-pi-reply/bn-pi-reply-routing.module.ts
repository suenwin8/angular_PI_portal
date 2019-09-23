import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {BnPiReplyComponent} from './bn-pi-reply.component';

const routes: Routes = [
  {
      path: '',
      component: BnPiReplyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BnPiReplyRoutingModule { }
