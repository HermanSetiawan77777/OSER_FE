import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, ProjectServices } from '../_services';
import { environment } from '@environments/environment';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
  form: FormGroup;
  imageSrc: string;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  fileImage: File;
  projects = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private projectServices: ProjectServices,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.isAddMode = !this.id;
    this.form = this.formBuilder.group({
      category: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      deadline: ['', Validators.required],
      duration: ['', Validators.required],
      image: [''],
    });

    if (!this.isAddMode) {
      this.projectServices
        .detailProject(this.id)
        .pipe(first())
        .subscribe((projects) => {
          this.projects = projects.message;
          let date = new Date(this.projects[0].Deadline)
            .toISOString()
            .slice(0, 10);
          if (
            this.projects[0].Image != undefined ||
            this.projects[0].Image != null
          ) {
            const imageId = this.projects[0].Image.split('/')[1];
            this.imageSrc = `${environment.apiUrl}/files/ViewLicense/${imageId}`;
          }
          this.form.patchValue({
            category: this.projects[0].Category,
            name: this.projects[0].ProjectName,
            price: this.projects[0].Price,
            deadline: date,
            duration: this.projects[0].Duration,
            remarks: this.projects[0].Remarks,
          });
        });
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.registerProjects();
    } else {
      this.updateProjects();
    }
  }

  private registerProjects() {
    // @ts-ignore
    this.projectServices
      .registerProject(this.form.value, this.fileImage)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Berhasil Membuat Project', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['/project'], { relativeTo: this.route });
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }

  private updateProjects() {
    // @ts-ignore
    this.projectServices
      .updateProject(this.form.value, this.id, this.fileImage)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Update successful', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['/project'], { relativeTo: this.route });
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.fileImage = file;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        this.form.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }
}
