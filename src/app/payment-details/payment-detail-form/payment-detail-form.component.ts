import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import {FormsModule} from '@angular/forms'
import { PaymentDetail } from '../../shared/payment-detail.model';
@Component({
  selector: 'app-payment-detail-form',
  imports: [FormsModule],
  templateUrl: './payment-detail-form.component.html',
  styles: ``
})
export class PaymentDetailFormComponent {
constructor(public service:PaymentDetailService){
}
onSubmit(form:FormsModule){
  this.service.postPaymentDetail()
  .subscribe({
    next:res=>{
      this.service.list=res as PaymentDetail[];
    },
    error:err=>{console.log(err)}
  })
}
}
