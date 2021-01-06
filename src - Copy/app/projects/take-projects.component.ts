import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Projects } from '../_models/projects';
import { AlertService, ProjectServices } from '../_services';

@Component({
  templateUrl: 'take-projects.component.html',
})
export class TakeProjectsComponent implements OnInit{
  form: FormGroup;
  id: string;
  loading = false;
  submitted = false;
  project = Projects;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private projectServices: ProjectServices,
    private alertService: AlertService,
  ) {}

  ngOnInit(){
    this.form = this.formBuilder.group({
      assignmentid: ['', Validators.required],
      category: ['', Validators.required]
    });
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
    this.projectServices.takeProjects(this.f.assignmentid.value, this.f.category.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams.returnUrl || '/schedule';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}
