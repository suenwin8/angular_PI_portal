import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BnPiShipmentComponent } from './bn-pi-shipment.component';
import { BirdnestComponent } from './component/birdnest/birdnest.component';



const routes: Routes = [
  { path: '', component: BnPiShipmentComponent },
   { path: 'create/:shipment_type', component: BirdnestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BnPiShipmentRoutingModule { }
