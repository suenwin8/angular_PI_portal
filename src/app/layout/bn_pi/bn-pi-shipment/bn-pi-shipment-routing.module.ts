import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BnPiShipmentComponent } from './bn-pi-shipment.component';


const routes: Routes = [
  {
      path: '',
      component: BnPiShipmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BnPiShipmentRoutingModule { }
