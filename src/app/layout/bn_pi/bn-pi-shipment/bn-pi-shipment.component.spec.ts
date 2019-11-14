import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnPiShipmentComponent } from './bn-pi-shipment.component';

describe('BnPiShipmentComponent', () => {
  let component: BnPiShipmentComponent;
  let fixture: ComponentFixture<BnPiShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnPiShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnPiShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
