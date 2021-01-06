import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { first } from 'rxjs/operators';
import { JobServicesService } from '../_services/job-services.service';
import { Services } from '../_models/services';
import Swal from 'sweetalert2/dist/sweetalert2.js';
// @ts-ignore
import paginate from 'jw-paginate';


@Component({
  selector: 'app-services-list-component',
  templateUrl: 'services-list.component.html'
})
export class ServicesListComponent implements OnInit, OnChanges {
  services = [];
  userId: string;
  pageOfItems: Array<any>;
  pager: any = {};
  @Output() changePage = new EventEmitter<any>(true);

  initialPage = 1;
  itemsPerPage = 10;
  maxSize = 10;

  constructor(private servicesServices: JobServicesService) {}
  ngOnInit() {
    this.userId = localStorage.getItem('userid').slice(1, -1);
    this.servicesServices.getServices()
      .pipe(first())
      .subscribe(jobServices => {
        // @ts-ignore
        this.services = jobServices.message;
        if (this.services !== [] && this.services.length !== 0) {
          this.setPageServices(this.initialPage);
        }
      });
  }

  setPageServices(page: number) {
    console.log('a');
    // get new pager object for specified page
    this.pager = paginate(this.services.length, page, this.itemsPerPage, this.maxSize);

    // get new page of items from items array
    this.pageOfItems = this.services.slice(this.pager.startIndex, this.pager.endIndex + 1);

    // call change page function in parent component
    this.changePage.emit(this.pageOfItems);
  }

  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPageServices(this.initialPage);
    }
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    console.log(pageOfItems);
    console.log('a');
    this.pageOfItems = pageOfItems;
  }

  deleteServices(id) {
    const user = this.services.find(x => x._id === id);
    Swal.fire({
      title: 'Apakah Anda Yakin?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Services Berhasil Di Hapus',
          'success',
          this.servicesServices.deleteServices(id)
            .pipe(first())
            .subscribe(() => {
              this.services = this.services.filter(x => x._id !== id);
              location.reload();
            })
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancel',
          'Hapus Services Dibatalkan',
          'error',
      );
      }
    });
  }
}
