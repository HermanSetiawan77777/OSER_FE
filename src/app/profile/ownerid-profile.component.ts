import { Component, OnInit } from '@angular/core';
import { AccountService, AlertService } from '@app/_services';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Component({
  templateUrl: 'ownerid-profile.component.html',
})
export class OwneridProfileComponent implements OnInit {
  ownerId: string;
  ownerProfiles: null;
  imageSrc: string;

  constructor(
    private accountServices: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const url = window.location.pathname;
    this.ownerId = url.substring(url.lastIndexOf('/') + 1);
    console.log(this.ownerId);
    this.accountServices
      .userProfile(this.ownerId)
      .pipe(first())
      .subscribe((ownerProfile) => {
        this.ownerProfiles = ownerProfile.message;
        console.log(this.ownerProfiles);
      });
  }
  goto() {
    this.router.navigate([`/review/list/${this.ownerId}`], {
      relativeTo: this.route,
    });
  }
}
