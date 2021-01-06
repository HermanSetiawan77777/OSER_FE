import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, ProjectServices } from '../_services';


@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
    form: FormGroup;
    imageSrc: string;
    id: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;
    fileImage: File;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private projectServices: ProjectServices,
        private alertService: AlertService,
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        console.log(this.id);
        this.isAddMode = !this.id;
        this.form = this.formBuilder.group({
            category: ['', Validators.required],
            name: ['', Validators.required],
            price: ['', Validators.required],
            deadline: ['', Validators.required],
            duration: ['', Validators.required],
            remarks: ['', Validators.required],
            image: ['', Validators.required],
            });
        if (!this.isAddMode) {
            /*this.projectServices.getById(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue({
                  category: x.category,
                  name: x.name,
                  price: x.price,
                  deadline: x.deadline,
                  duration: x.duration,
                  remarks: x.remarks,
                  image: x.file,
                }));*/
        }
    }

    // convenience getter for easy access to form fields
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
        if (this.isAddMode) {
            this.registerProjects();
        } else {
            this.updateProjects();
        }
    }

    private registerProjects() {

      console.log(this.fileImage);
        // @ts-ignore
      this.projectServices.registerProject(this.form.value, this.fileImage)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Berhasil Membuat Project', { keepAfterRouteChange: true });
                    this.router.navigate(['/project'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

    private updateProjects() {
      console.log(this.form.value);
        // @ts-ignore
      this.projectServices.updateProject( this.form.value, this.id, this.fileImage)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Update successful', { keepAfterRouteChange: true });
                    this.router.navigate(['/project'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

  onFileChange(event) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.fileImage = file;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.form.patchValue({
          fileSource: reader.result
        });

      };

    }
  }
}
