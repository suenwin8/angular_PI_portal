import { RC_STATUS } from 'src/app/models/bn_pi/rc-status';
import { PI_AC_STATUS } from 'src/app/models/bn_pi/pi-ac-status';
import { BN_PI_HDR_STATUS } from 'src/app/models/bn_pi/bn-pi-hdr-status';

export interface IBnPiReplyDetail {
     txn_no: string;
     version: number;
     large_beautiful_birdnests_mark: number;
     broken_birdnests_mark: number;
     seriti_mark: number;
     others_mark: number;
     bulu_berat_price: number;
     bulu_sedang_price: number;
     bulu_ringan_price: number;
     pinus_price: number;
     cemara_price: number;
     mix_price: number;
     market_information: string;
     any_others: string;
     form_status: string;
     created_date: Date;
     created_by: string;
     last_updated_date: Date;
     last_updated_by: string;
}

export interface IBnPiHdr {
     txn_no: string;
     supplier_code: string;
     notice_pi_reply_date: Date;
     received_date: Date;
     airway_bill: string;
     expected_reply_date: Date;
     actual_reply_date: Date;
     expected_payment_date: Date;
     is_delayed: boolean;
     rc_status: RC_STATUS;
     pi_ac_status: PI_AC_STATUS;
     status: BN_PI_HDR_STATUS;
     sent_delay_mail_datetime: Date;
     rec_type: string;
     acc_remarks: string;
     created_by: string;
     created_date: Date;
     last_updated_date: Date;
     last_updated_by: string;
  }

  export interface IBnPiReply {
    reply_detail?: IBnPiReplyDetail;
    reply_hdr: IBnPiHdr;
  }
