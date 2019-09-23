import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BnPiHdrComponent } from './bn-pi-hdr.component';
import { BnPiHdrRoutingModule} from './bn-pi-hdr-routing.module';

@NgModule({
  imports: [CommonModule
  , BnPiHdrRoutingModule
],
  declarations: [BnPiHdrComponent]
})
export class BnPiHdrModule { }
