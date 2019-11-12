import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BnPiHdrComponent } from './bn-pi-hdr.component';
 import { BnPiReplyComponent } from '../bn-pi-reply/bn-pi-reply.component';

const routes: Routes = [
  { path: '', component: BnPiHdrComponent },
   { path: 'bn-pi-reply/:txn_no', component: BnPiReplyComponent },
   { path: 'status/:status', component: BnPiHdrComponent, runGuardsAndResolvers: 'paramsChange', }
];
@NgModule({
  // imports: [RouterModule.forChild(routes)],
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BnPiHdrRoutingModule { }
