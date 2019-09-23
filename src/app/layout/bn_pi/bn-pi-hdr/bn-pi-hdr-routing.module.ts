import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BnPiHdrComponent } from './bn-pi-hdr.component';

const routes: Routes = [
  {
      path: '',
      component: BnPiHdrComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BnPiHdrRoutingModule { }
