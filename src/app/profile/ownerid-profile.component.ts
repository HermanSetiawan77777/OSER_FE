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
  ownerProfiles: UserProfilePage;
  imageSrc: string;
  // UserProfileModel: UserProfilePage;


  constructor(
    private accountServices: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const url = window.location.pathname;
    this.ownerProfiles = new UserProfilePage();
    this.ownerId = url.substring(url.lastIndexOf('/') + 1);
    console.log(this.ownerId);
    this.accountServices
      .userProfile(this.ownerId)
      .pipe(first())
      .subscribe((ownerProfile) => {
        this.ownerProfiles = ownerProfile.message;
        console.log(this.ownerProfiles);
        console.log(this.ownerProfiles);
        // console.log(this.UserProfileModel);


        // this.UserProfileModel.audio = this.ownerProfiles.audio == '1' ? true : false;
        // this.UserProfileModel.games = sessionProfile.Games == '1' ? true : false;
        // this.UserProfileModel.website =
        //   sessionProfile.Website == '1' ? true : false;
        // this.UserProfileModel.modelling =
        //   sessionProfile.Modelling == '1' ? true : false;
      });



      this.form.patchValue({
        // username: this.UserProfileModel.username,
        // password: this.UserProfileModel.password,
        // phone: this.UserProfileModel.phone,
        // remarks: this.UserProfileModel.remarks,
        // linkedIn: this.UserProfileModel.linkedIn,
        audio: this.ownerProfiles.audio,
        games: this.ownerProfiles.games,
        website: this.ownerProfiles.website,
        modelling: this.ownerProfiles.modelling,
      });

  }

  

  goto() {
    this.router.navigate([`/review/list/${this.ownerId}`], {
      relativeTo: this.route,
    });
  }
}