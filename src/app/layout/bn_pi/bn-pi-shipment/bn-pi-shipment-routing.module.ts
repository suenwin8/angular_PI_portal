import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BnPiShipmentComponent } from './bn-pi-shipment.component';
import { BirdnestComponent } from './component/birdnest/birdnest.component';
import { BnPiShipmentDetailComponent } from './bn-pi-shipment-detail/bn-pi-shipment-detail.component';



const routes: Routes = [
  { path: '', component: BnPiShipmentComponent },
   // { path: 'create/:shipment_type', component: BirdnestComponent },
   { path: 'create/:shipment_type', component: BnPiShipmentDetailComponent },
   { path: 'edit/:shipment_no', component: BnPiShipmentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BnPiShipmentRoutingModule { }
