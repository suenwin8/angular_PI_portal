import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
// nicole 20191105
import { DataTablesModule } from 'angular-datatables';
import { BnPiShipmentComponent} from './bn-pi-shipment.component';
import { BnPiShipmentRoutingModule } from './bn-pi-shipment-routing.module';
import { BirdnestComponent } from './component/birdnest/birdnest.component';
import { SeritiComponent } from './component/seriti/seriti.component';
import { HeaderComponent } from './component/header/header.component';
import { BnPiShipmentDetailComponent } from './bn-pi-shipment-detail/bn-pi-shipment-detail.component';



@NgModule({
  imports: [CommonModule
    , BnPiShipmentRoutingModule
    , PageHeaderModule
    , NgbModule
    , FormsModule
    , ReactiveFormsModule
    , DataTablesModule
  ],
  declarations: [
    BnPiShipmentComponent,
    BirdnestComponent,
    SeritiComponent,
    HeaderComponent,
    BnPiShipmentDetailComponent
  ]
  , providers: [DatePipe]
})
export class BnPiShipmentModule { }
