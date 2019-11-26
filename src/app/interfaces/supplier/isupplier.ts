export interface ISupplier {
    id: number;
    supplier_login_account_id: number;
    supplier_code: number;
    start_date: Date;
    end_date: Date;
    created_date: Date;
    created_by: string;
    last_updated_date: Date;
    last_updated_by: string;
}

// api
export interface IPOST_supplier_account_id {
    supplier_login_account_id: number;
}
