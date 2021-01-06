import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { AccountService, ProjectServices } from '@app/_services';
// @ts-ignore
import paginate from 'jw-paginate';

@Component({
  selector: 'app-project-list-component',
  templateUrl: 'list.component.html',
})
export class ListComponent implements OnInit, OnChanges {
    userId: string;
    projects = [];
    pageOfItems: Array<any>;
    pager: any = {};
    @Output() changePage = new EventEmitter<any>(true);

    initialPage = 1;
    itemsPerPage = 10;
    maxSize = 10;

    constructor(private projectServices: ProjectServices) {}

    ngOnInit() {
      this.userId = localStorage.getItem('userid').slice(1, -1);
      this.projectServices.getProjects()
        .pipe(first())
        .subscribe(projects => {
          // @ts-ignore
          this.projects = projects.message;
          if (this.projects !== [] && this.projects.length !== 0) {
            this.setPageProject(this.initialPage);
          }
        });
    }

  setPageProject(page: number) {
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
      this.setPageProject(this.initialPage);
    }
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    console.log(pageOfItems);
    console.log('a');
    this.pageOfItems = pageOfItems;
  }

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
              location.reload();
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
