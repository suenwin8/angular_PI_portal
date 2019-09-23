import { RC_STATUS } from './rc-status';
import { PI_AC_STATUS } from './pi-ac-status';
import { BN_PI_HDR_STATUS } from './bn-pi-hdr-status';

export class BN_PI_HDR {
    public txn_no: string;
    public supplier_code: string;
    public notice_pi_reply_date: Date;
    public received_date: Date;
    public airway_bill: string;
    public expected_reply_date: Date;
    public actual_reply_date: Date;
    public expected_payment_date: Date;
    public is_delayed: boolean;
    public rc_status: RC_STATUS;
    public pi_ac_status: PI_AC_STATUS;
    public status: BN_PI_HDR_STATUS;
    public sent_delay_mail_datetime: Date;
    public rec_type: string;
    public created_by: string;
    public created_date: Date;
    public last_updated_date: Date;
    public last_updated_by: string;
  }

