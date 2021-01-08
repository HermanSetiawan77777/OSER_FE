import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RequestPriceServices } from '@app/_services';
import { first } from 'rxjs/operators';
// @ts-ignore
import paginate from 'jw-paginate';

@Component({
  templateUrl: 'request-price.component.html',
})
export class RequestPriceComponent implements OnInit, OnChanges {
  pageOfItems: Array<any>;
  requestPrice = [];
  pager: any = {};
  @Output() changePage = new EventEmitter<any>(true);

  initialPage = 1;
  itemsPerPage = 5;
  maxSize = 5;

  constructor(private requestPriceServices: RequestPriceServices) {}

  ngOnInit() {
    const userId = localStorage.getItem('userid').slice(1, -1);
    this.requestPriceServices
      .getRequestPrice(userId)
      .pipe(first())
      .subscribe((requestPrice) => {
        // @ts-ignore
        this.requestPrice = requestPrice.message;
        if (this.requestPrice !== [] && this.requestPrice.length !== 0) {
          this.setPageRequestPrice(this.initialPage);
        }
      });
  }

  // tslint:disable-next-line:typedef
  setPageRequestPrice(page: number) {
    console.log('a');
    // get new pager object for specified page
    this.pager = paginate(
      this.requestPrice.length,
      page,
      this.itemsPerPage,
      this.maxSize
    );

    // get new page of items from items array
    this.pageOfItems = this.requestPrice.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );

    // call change page function in parent component
    this.changePage.emit(this.pageOfItems);
  }

  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPageRequestPrice(this.initialPage);
    }
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    console.log(pageOfItems);
    console.log('a');
    this.pageOfItems = pageOfItems;
  }
}
