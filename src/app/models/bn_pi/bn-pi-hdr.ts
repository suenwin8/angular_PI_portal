import { RC_STATUS } from './rc-status';
import { PI_AC_STATUS } from './pi-ac-status';
import { BN_PI_HDR_STATUS } from './bn-pi-hdr-status';
import { IBnPiReply, IBnPiHdr, IBnPiReplyDetail } from 'src/app/interfaces/bn-pi/ibn-pi-reply';

export class BN_PI_HDR {
 // private hdr_obj: IBnPiReply;
    public txn_no: string;
    public supplier_code: string;
    public notice_pi_reply_date: Date;
    public received_date: Date;
    public airway_bill: string;
    public expected_reply_date: Date;
    public actual_reply_date: Date;
    public expected_payment_date: Date;
    public is_delayed: boolean;
    public rc_status: string;
    public pi_ac_status: string;
    public status: string;
    public sent_delay_mail_datetime: Date;
    public rec_type: string;
    public acc_remarks: string;
    public created_by: string;
    public created_date: Date;
    public last_updated_date: Date;
    public last_updated_by: string;
//   public setBNPiHdr(interface_reply_hdr: IBnPiHdr, interface_reply_dtl: IBnPiReplyDetail) {
//     this.hdr_obj = { reply_hdr: interface_reply_hdr, reply_detail: interface_reply_dtl };
// }
  }

