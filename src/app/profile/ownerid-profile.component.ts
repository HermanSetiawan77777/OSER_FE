import { Component, OnInit } from '@angular/core';
import { AccountService, AlertService } from '@app/_services';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { UserProfilePage } from '@app/_models/userProfilePage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'ownerid-profile.component.html',
})
export class OwneridProfileComponent implements OnInit {
  form: FormGroup;

  ownerId: string;
  ownerProfile: UserProfilePage;
  imageSrc: string;
  // UserProfileModel: UserProfilePage;

  constructor(
    private accountServices: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.ownerProfile = new UserProfilePage();

    const url = window.location.pathname;
    this.ownerId = url.substring(url.lastIndexOf('/') + 1);

    console.log(this.ownerId);
    this.accountServices
      .userProfile(this.ownerId)
      .pipe(first())
      .subscribe((ownerProfile) => {
        this.ownerProfile = ownerProfile.message[0];
        console.log(this.ownerProfile);

        this.ownerProfile.audio =
          ownerProfile.message[0].Audio == '1' ? true : false;
        this.ownerProfile.games =
          ownerProfile.message[0].Games == '1' ? true : false;
        this.ownerProfile.website =
          ownerProfile.message[0].Website == '1' ? true : false;
        this.ownerProfile.modelling =
          ownerProfile.message[0].Modelling == '1' ? true : false;
      });
  }

  goto() {
    this.router.navigate([`/review/list/${this.ownerId}`], {
      relativeTo: this.route,
    });
  }
}
