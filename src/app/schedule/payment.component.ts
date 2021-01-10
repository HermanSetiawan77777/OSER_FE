import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ScheduleServices } from '../_services/schedule.services';

@Component({
  templateUrl: 'payment.component.html',
})
export class PaymentComponent implements OnInit {
  priceDetail = null;
  loading: false;
  scheduleId: string;

  constructor(private scheduleServices: ScheduleServices) {}

  ngOnInit() {
    const url = window.location.pathname;
    this.scheduleId = url.substring(url.lastIndexOf('/') + 1);

    this.scheduleServices
      .getScheduleDetail(this.scheduleId)
      .pipe(first())
      .subscribe((res) => {
        this.priceDetail = res.message[0];
        console.log(this.priceDetail);
      });
  }
}
