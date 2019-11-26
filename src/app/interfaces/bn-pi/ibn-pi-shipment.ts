import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export interface IBnPiShipmentDetail {
    shipment_no: string;
    supplier_code: string;
    next_shipment_date: Date;
    _next_shipment_date: NgbDateStruct;
    shipment_type: string;
    bulu_ringan_beautiful_birdsNest_qty: number;
    bulu_ringan_medium_birdsNest_qty: number;
    bulu_ringan_small_birdsNest_qty: number;
    bulu_ringan_broken_qty: number;
    bulu_ringan_beautiful_birdsNest_unit: string;
    bulu_ringan_medium_birdsNest_unit: string;
    bulu_ringan_small_birdsNest_unit: string;
    bulu_ringan_broken_unit: string;
    bulu_behat_beautiful_birdsNest_qty: number;
    bulu_behat_medium_birdsNest_qty: number;
    bulu_behat_small_birdsNest_qty: number;
    bulu_behat_broken_qty: number;
    bulu_behat_beautiful_birdsNest_unit: string;
    bulu_behat_medium_birdsNest_unit: string;
    bulu_behat_small_birdsNest_unit: string;
    bulu_behat_broken_unit: string;
    seriti_BirdsNest_qty: number;
    seriti_BirdsNest_unit: string;
    any_others: string;
    any_others_translated: string;
    remarks: string;
    remarks_translated: string;
    submitted_date: Date;
    txn_no: string;
    reference_pi_no: string;
    Airway_Bill_no: string;
    rec_type: string;
    status: string;
    created_date: Date;
    created_by: string;
    last_updated_date: Date;
    last_updated_by: string;
}

export interface IBnPiShipmentNo {
    shipment_no: string;
}

// API
export interface IPOST_PIShipment {
    shipment_detail: IBnPiShipmentDetail;
  }



