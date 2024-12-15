import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment.development';
import { error } from 'console';
import { PaymentDetail } from './payment-detail.model';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url:string=environment.apiBaseUrl + '/PaymentDetail'
  list:PaymentDetail[]=[];
  formData:PaymentDetail=new PaymentDetail()
  constructor(private http:HttpClient) { }


  refreshlist(){
    this.http.get(this.url)
    .subscribe({
      next:res=>{
        this.list=res as PaymentDetail[];
      },
      error: err=>{console.log(err)}
    })
  }

  postPaymentDetail(){
    return this.http.delete(this.url + '/'+ identifierName)
  }
  OnDeletepaymentdetail(id:number){
    return this.http.delete(this.url+'/'+ id)
  }
}
