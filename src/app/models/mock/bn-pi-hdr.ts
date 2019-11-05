
import { BN_PI_HDR } from '../bn_pi/bn-pi-hdr';
import { RC_STATUS } from '../bn_pi/rc-status';
import { PI_AC_STATUS } from '../bn_pi/pi-ac-status';
import { BN_PI_HDR_STATUS } from '../bn_pi/bn-pi-hdr-status';

export const BN_PI_HDRS: BN_PI_HDR[] = [
    {
        txn_no: '25629'
        , supplier_code: '508'
        , notice_pi_reply_date: new Date('2019-07-16')
        , received_date: new Date('2019-07-05')
        , airway_bill: '51 5609 1312'
        , expected_reply_date: new Date('2019-07-18')
        , actual_reply_date: null
        , expected_payment_date: new Date('2019-07-23')
        , is_delayed: false
        , rc_status: 'Sent'
        , pi_ac_status: 'Sent'
        , status: 'Pending Reply'
        , sent_delay_mail_datetime: null
        , rec_type: 'BIRDNEST'
        , acc_remarks: ''
        , created_date: new Date('2019-09-20')
        , created_by: 'nicole'
        , last_updated_date: new Date('2019-09-20')
        , last_updated_by: 'nicole'
      },
      {
        txn_no: '26170'
        , supplier_code: '508'
        , notice_pi_reply_date: new Date('2019-10-15')
        , received_date: new Date('2019-10-02')
        , airway_bill: '20 7544 6354'
        , expected_reply_date: new Date('2019-10-17')
        , actual_reply_date: new Date('2019-10-17')
        , expected_payment_date: new Date('2019-10-17')
        , is_delayed: false
        , rc_status: 'Sent'
        , pi_ac_status: 'Sent'
        , status: 'Replied'
        , sent_delay_mail_datetime: null
        , rec_type: 'BIRDNEST'
        , acc_remarks: ''
        , created_date: new Date('2019-10-02')
        , created_by: 'nicole'
        , last_updated_date: new Date('2019-10-02')
        , last_updated_by: 'nicole'
      },
      {
        txn_no: '26136'
        , supplier_code: '508'
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
        , rec_type: 'BIRDNEST'
        , acc_remarks: ''
        , created_date: new Date('2019-09-20')
        , created_by: 'nicole'
        , last_updated_date: new Date('2019-09-20')
        , last_updated_by: 'nicole'
      },
      {
        txn_no: '26134'
        , supplier_code: '00003'
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
        , acc_remarks: ''
        , created_date: new Date('2019-09-20')
        , created_by: 'nicole'
        , last_updated_date: new Date('2019-09-20')
        , last_updated_by: 'nicole'
      },
      {
        txn_no: '26091'
        , supplier_code: '00004'
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
        , rec_type: 'BIRDNEST'
        , acc_remarks: ''
        , created_date: new Date('2019-09-20')
        , created_by: 'nicole'
        , last_updated_date: new Date('2019-09-20')
        , last_updated_by: 'nicole'
      }
];
