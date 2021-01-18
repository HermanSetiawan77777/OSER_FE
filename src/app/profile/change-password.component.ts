import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService } from '@app/_services';
import { first } from 'rxjs/operators';
import { MustMatch } from '@app/account/register.component';
import { changePasswordModel } from '../_models/changePasswordModel';

@Component({
  templateUrl: 'change-password.component.html'
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  changePaswordModel: changePasswordModel;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit(){
    this.changePaswordModel=new changePasswordModel();
    this.form = this.formBuilder.group({
      PrevPassword: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validator: MustMatch('password', 'confirmPassword'),
    }
    );
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    let id = this.route.snapshot.params.id;
    console.log(this.f.password.value)
    console.log(this.f.PrevPassword.value)
    this.changePaswordModel.password=this.f.password.value
    this.changePaswordModel.PrevPassword=this.f.PrevPassword.value
    this.accountService.changepassword(id, this.changePaswordModel)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/profile';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}

