export class BnPiShipment {
}

export const BN_PI_SHIPMENT_TYPE: BnPiShipmentType[] = [
    {type_name: 'BIRDNEST'}
    , {type_name: 'SERITI'}
];

export const BN_SHIPMENT_UNIT: BnPiShipmentUnit[] = [
    {unit_name: 'Catties'}
    , {unit_name: 'Kilos'}
];
export class BnPiShipmentType {
    public type_name: string;
}
export class BnPiShipmentUnit {
    public unit_name: string;
}
