import { IBnPiReply } from 'src/app/interfaces/bn-pi/ibn-pi-reply';
import { RC_STATUS } from '../bn_pi/rc-status';
import { PI_AC_STATUS } from '../bn_pi/pi-ac-status';
import { BN_PI_HDR_STATUS } from '../bn_pi/bn-pi-hdr-status';


export const BnPiReplyDetail: IBnPiReply = {
  reply_detail: {
    txn_no: '24500A'
    , version: 1
    , large_beautiful_birdnests_mark: 5
    , broken_birdnests_mark: 4
    , seriti_mark: null
    , others_mark: null
    , bulu_berat_price: null
    , bulu_sedang_price: null
    , bulu_ringan_price: null
    , pinus_price: null
    , cemara_price: null
    , mix_price: null
    , market_information: null
    , any_others: null
    , form_status: null
    , created_date: null
    , created_by: null
    , last_updated_date: null
    , last_updated_by: null
  }
  , reply_hdr: {
    txn_no: '24500A'
    , supplier_code: '00001'
    , notice_pi_reply_date: new Date('2019-09-25')
    , received_date: new Date('2019-09-01')
    , airway_bill: ''
    , expected_reply_date: new Date('2019-09-28')
    , actual_reply_date: null
    , expected_payment_date: null
    , is_delayed: false
    , rc_status: 'Sent'
    , pi_ac_status: 'Sent'
    , status: 'Pending Reply'
    , sent_delay_mail_datetime: null
    , rec_type: 'SERITI'
    , acc_remarks: ` *  Payment on 19-Mar-19 Tuesday (subject to cashflow availablity) if you have filled in ''Reply'' and signed back to confirm the amount within 2 working days from the issue of this invoice.  Otherwise, it will be made in next payment date (upon receipt of completed reply).
    *  Our payment date is on Tuesday and Friday every week.
    *  Any change of payment method & bank information.
       Please inform us before the payment date
    *  Concerning our Market Forecast and our Preference, you are welcome to contact Ms. Melani or Mr. Wilson Ng for more details.`
    , created_date: new Date('2019-09-20')
    , created_by: 'nicole'
    , last_updated_date: new Date('2019-09-20')
    , last_updated_by: 'nicole'
  }
};
