import { Component, Input, OnChanges, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProjectServices } from '@app/_services';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2/dist/sweetalert2.js';
// @ts-ignore
import paginate from 'node_modules/jw-paginate';

@Component({
  selector: 'app-myproject-component',
  templateUrl: 'myproject.component.html',
})
export class MyprojectComponent implements OnInit, OnChanges{
  pageOfItems: Array<any>;
  projects = [];
  pager: any = {};
  @Output() changePage = new EventEmitter<any>(true);

  initialPage = 1;
  itemsPerPage = 5;
  maxSize = 5;

  constructor(private projectServices: ProjectServices) {}

  ngOnInit() {
    const ownerId = localStorage.getItem('userid').slice(1, -1);
    this.projectServices.getMyProjects(ownerId)
      .pipe(first())
      .subscribe(projects => {
        // @ts-ignore
        this.projects = projects.message;
        if (this.projects !== [] && this.projects.length !== 0) {
          this.setPage(this.initialPage);
        }
      });

  }

  setPage(page: number) {
    console.log('a');
    // get new pager object for specified page
    this.pager = paginate(this.projects.length, page, this.itemsPerPage, this.maxSize);

    // get new page of items from items array
    this.pageOfItems = this.projects.slice(this.pager.startIndex, this.pager.endIndex + 1);

    // call change page function in parent component
    this.changePage.emit(this.pageOfItems);
  }

  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    console.log(pageOfItems);
    console.log('a');
    this.pageOfItems = pageOfItems;
  }

  // tslint:disable-next-line:typedef
  deleteProjects(id) {
    const user = this.projects.find(x => x._id === id);
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
          'Project Berhasil Di Hapus',
          'success',
          this.projectServices.deleteProjects(id)
            .pipe(first())
            .subscribe(() => {
              this.projects = this.projects.filter(x => x._id !== id);
            }),
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
