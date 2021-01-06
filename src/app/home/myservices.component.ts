import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { JobServicesService, ProjectServices } from '@app/_services';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2/dist/sweetalert2.js';
// @ts-ignore
import paginate from 'jw-paginate';


@Component({
  selector: 'app-myservices-component',
  templateUrl: 'myservices.component.html',
})
export class MyservicesComponent implements OnInit, OnChanges{
  pageOfItems: Array<any>;
  services = [];
  pager: any = {};
  @Output() changePage = new EventEmitter<any>(true);

  initialPage = 1;
  itemsPerPage = 5;
  maxSize = 5;

  constructor(private servicesServices: JobServicesService) {}

  ngOnInit() {
    const ownerId = localStorage.getItem('userid').slice(1, -1);
    this.servicesServices.getMyServices(ownerId)
      .pipe(first())
      .subscribe(services => {
        // @ts-ignore
        this.services = services.message;
        if (this.services !== [] && this.services.length !== 0) {
          this.setPageMyServices(this.initialPage);
        }
      });
  }

  setPageMyServices(page: number) {
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
      this.setPageMyServices(this.initialPage);
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
            })
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancel',
          'Hapus Project Dibatalkan',
          'error'
        );
      }
    });
  }
}
