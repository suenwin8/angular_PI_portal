import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormControl, FormGroup } from '@angular/forms';
import { BnPiShipmentType, BN_PI_SHIPMENT_TYPE } from 'src/app/models/bn_pi/bn-pi-shipment';

@Component({
  selector: 'app-bn-pi-shipment',
  templateUrl: './bn-pi-shipment.component.html',
  styleUrls: ['./bn-pi-shipment.component.scss'],
  animations: [routerTransition()]
})
export class BnPiShipmentComponent implements OnInit {

  create_choice = BN_PI_SHIPMENT_TYPE;
  selectedChoice: BnPiShipmentType;

  constructor(private router: Router) { }

  ngOnInit() {


  }

  onSelect(choice: BnPiShipmentType) {
    this.selectedChoice = choice;
    console.log(this.selectedChoice);
    // this.router.navigateByUrl('bn-pi-shipment/create/', this.selectedChoice.type_name);
  }
  goToShipment = function () {
     const shipment_type = this.myGroup.get('first').value;
     console.log(shipment_type);
    this.router.navigateByUrl('bn-pi-shipment/create/birdnest');
};

}
