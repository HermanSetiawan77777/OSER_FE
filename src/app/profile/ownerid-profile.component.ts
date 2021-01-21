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
  ownerProfiles: null;
  imageSrc: string;
  UserProfileModel: UserProfilePage;


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

      this.form.patchValue({
        username: this.UserProfileModel.username,
        password: this.UserProfileModel.password,
        phone: this.UserProfileModel.phone,
        remarks: this.UserProfileModel.remarks,
        linkedIn: this.UserProfileModel.linkedIn,
        audio: this.UserProfileModel.audio,
        games: this.UserProfileModel.games,
        website: this.UserProfileModel.website,
        modelling: this.UserProfileModel.modelling,
      });

  }

  

  goto() {
    this.router.navigate([`/review/list/${this.ownerId}`], {
      relativeTo: this.route,
    });
  }
}