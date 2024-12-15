import { Component,OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from "./payment-detail-form/payment-detail-form.component";
import { PaymentDetailService } from '../shared/payment-detail.service';
import { CommonModule } from '@angular/common';
import { PaymentDetail } from '../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  imports: [PaymentDetailFormComponent,CommonModule],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent  implements OnInit{
  sortColumn: string = ''; // نام ستونی که مرتب می‌شود
  isAscending: boolean = true; // ترتیب مرتب‌سازی: صعودی یا نزولی
constructor(public service:PaymentDetailService){

}

sortData(column: string) {
  if (this.sortColumn === column) {
    this.isAscending = !this.isAscending; // تغییر ترتیب مرتب‌سازی
  } else {
    this.sortColumn = column;
    this.isAscending = true; // مرتب‌سازی صعودی پیش‌فرض
  }

  this.service.list.sort((a: any, b: any) => {
    const valueA = a[column];
    const valueB = b[column];

    if (valueA < valueB) return this.isAscending ? -1 : 1;
    if (valueA > valueB) return this.isAscending ? 1 : -1;
    return 0;
  });
}
  ngOnInit(): void {
    this.service.refreshlist();
  }
  OnDelete(id:number){
    this.service.OnDeletepaymentdetail(id)
        .subscribe({
          next:res=>{
            this.service.list=res as PaymentDetail[];
          },
          error: err=>{console.log(err)}
        })
  }
}
