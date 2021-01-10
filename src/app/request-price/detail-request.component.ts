import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestPriceServices } from '@app/_services';
import { AlertService } from '../_services';
import { first } from 'rxjs/operators';
import { detailRequest } from '../_models/detailRequest';
import Swal from 'sweetalert2/dist/sweetalert2.js';
// @ts-ignore

@Component({
  templateUrl: 'detail-request.component.html',
})
export class DetailRequestComponent implements OnInit {
  newPrice: any;
  requestPrice: detailRequest;
  submitted = false;
  id: string;
  userId: string;

  setujuBtn = false;
  sepakatBtn = true;
  tidakSepakatBtn = true;

  constructor(
    private requestPriceServices: RequestPriceServices,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.newPrice = '';
    this.requestPrice = new detailRequest();
    this.userId = localStorage.getItem('userid').slice(1, -1);

    this.id = this.route.snapshot.params.id;
    this.getNegoDetailData();
    if (this.requestPrice.OwnerID == this.userId) {
      this.setujuBtn = true;
    }
  }

  getNegoDetailData() {
    this.requestPriceServices
      .getDetailPriceById(this.id)
      .pipe(first())
      .subscribe((requestPrice) => {
        // @ts-ignore
        this.requestPrice = requestPrice.message[0];
        console.log(this.requestPrice);
      });
  }

  kesepakatanNego(status: string) {
    if (status == 'batal') {
      if (this.requestPrice.OwnerID == this.userId) {
        this.requestPriceServices
          .batalNegoOwner(this.id)
          .pipe(first())
          .subscribe({
            next: () => {
              Swal.fire('Negosiasi telah di batalkan', '', 'success');
              this.router.navigate(['/requestprice'], {
                relativeTo: this.route,
              });
              this.getNegoDetailData();
            },
            error: (error) => {
              Swal.fire('Proses pembatalan error', error, 'failed');
            },
          });
      } else {
        this.requestPriceServices
          .batalNegoUser(this.id)
          .pipe(first())
          .subscribe({
            next: () => {
              Swal.fire('Negosiasi telah di batalkan', '', 'success');
              this.router.navigate(['/requestprice'], {
                relativeTo: this.route,
              });
              this.getNegoDetailData();
            },
            error: (error) => {
              Swal.fire('Proses pembatalan error', error, 'failed');
            },
          });
      }
    } else {
      if (this.requestPrice.OwnerID == this.userId) {
        this.requestPriceServices
          .sepakatNegoOwner(this.id)
          .pipe(first())
          .subscribe({
            next: () => {
              Swal.fire(
                'Negosiasi berhasil',
                'Silahkan menunggu proses dari penawar',
                'success'
              );
              this.getNegoDetailData();
            },
            error: (error) => {
              Swal.fire('Proses persetuuan error', error, 'failed');
            },
          });
      } else {
        this.requestPriceServices
          .sepakatNegoUser(this.id)
          .pipe(first())
          .subscribe({
            next: () => {
              Swal.fire(
                'Negosiasi berhasil',
                'Negosiasi berhasil di sepakati oleh anda',
                'success'
              );
              this.getNegoDetailData();
            },
            error: (error) => {
              Swal.fire('Proses persetuuan error', error, 'failed');
            },
          });
      }
    }
  }

  finnalizeNegoOwner() {
    this.requestPriceServices
      .finnalizeNegoOwner(this.id)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Nego Dibatalkan', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['/requestprice'], {
            relativeTo: this.route,
          });
        },
        error: (error) => {
          this.alertService.error(error);
        },
      });
  }

  resetPrice() {
    console.log('a');
    this.requestPriceServices
      .resetRequestPrice(this.id)
      .pipe(first())
      .subscribe({
        next: () => {
          Swal.fire(
            'Negosiasi tidak di sepakati',
            'Harga telah di ulang',
            'warning'
          );
          this.getNegoDetailData();
        },
        error: (error) => {
          Swal.fire('Proses persetuuan error', error, 'failed');
        },
      });
  }

  nego() {
    if (isNaN(this.newPrice)) {
      this.alertService.clear();
      this.alertService.error('harga harus berupa angka');
      return;
    }

    if (this.newPrice.length < 3) {
      this.alertService.clear();
      this.alertService.error('harga minimal nego adalah 100');
      return;
    }

    this.requestPriceServices
      .negoRequestPrice(this.id, this.newPrice)
      .pipe(first())
      .subscribe({
        next: () => {
          if (this.requestPrice.OwnerID == this.userId) {
            Swal.fire(
              'Negosiasi berhasil di request',
              'Menunggu konfirmasi dari user',
              'success'
            );
          } else {
            Swal.fire(
              'Negosiasi berhasil di request',
              'Menunggu konfirmasi dari owner',
              'success'
            );
          }
          this.newPrice = '';
          this.getNegoDetailData();
          //this.router.navigate(['/requestprice'], { relativeTo: this.route });
        },
        error: (error) => {
          Swal.fire('Negosiasi gagal di request', error, 'failed');
        },
      });
  }
}
