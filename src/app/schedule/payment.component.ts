import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ScheduleServices } from '../_services/schedule.services';
import { AlertService } from '../_services';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  templateUrl: 'payment.component.html',
})
export class PaymentComponent implements OnInit {
  priceDetail = null;
  loading: false;
  scheduleId: string;

  constructor(
    private scheduleServices: ScheduleServices,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.priceDetail = {};
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

  confirmPayment() {
    let sessionProfile = JSON.parse(localStorage.getItem('userProfile'));
    let userStatus =
      this.priceDetail.OwnerID == sessionProfile.userid ? 'owner' : 'user';

    Swal.fire({
      title: 'Apakah anda yakin pembayaran telah selesai ?',
      text: 'Anda tidak dapat mebatalkannya !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Iya',
      cancelButtonText: 'Tidak',
    }).then((result) => {
      if (result.isConfirmed) {
        this.scheduleServices
          .confirmPayment(this.scheduleId, userStatus)
          .pipe(first())
          .subscribe({
            next: () => {
              Swal.fire(
                'Konfirmasi pembayaran berhasil!',
                'Terima kasih',
                'success'
              ).then(() => {
                this.router.navigate(
                  [`/schedule/schedule/detail/${this.scheduleId}`],
                  { relativeTo: this.route }
                );
              });
            },
            error: (error) => {
              this.alertService.error(error);
              this.loading = false;
            },
          });
      }
    });
  }
}
