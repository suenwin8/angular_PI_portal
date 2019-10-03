import { Injectable } from '@angular/core';
import { IBnPiReply } from 'src/app/interfaces/bn-pi/ibn-pi-reply';
import { BnPiReplyService } from 'src/app/services/bn-pi/bn-pi-reply-service.service';

@Injectable({
  providedIn: 'root'
})
export class BnPiReplyLoaderService {

  constructor(private bnpireplyservice: BnPiReplyService) { }

  loadReplyForEdit(data: IBnPiReply): void {
    console.log(data);
    this.bnpireplyservice.form.patchValue({
      reply_detail: {
        ...data.reply_detail
      },
      reply_hdr: {...data.reply_hdr}
    });


  }
}
