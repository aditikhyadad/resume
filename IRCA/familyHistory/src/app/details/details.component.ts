import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DetailsService } from '../shared/details.service';
import { Details } from '../shared/details.model';

declare var M: any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [DetailsService]
})
export class DetailsComponent implements OnInit{
  @ViewChild('detailsForm', { static: false }) detailsForm !: NgForm;
  constructor(public detailsService: DetailsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.resetForm();
    this.refreshDetailsList();
    M.AutoInit();
  }

  /*ngOnInit(): void {
    this.detailsForm = this.fb.group({
      _id: [''], // Add default values or values from your service
      fname: ['', Validators.required],
      fage: [''],
      foccupation: [''],
      fincome: ['', Validators.required],
      // Add other fields for mother's details
    });
  }*/

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.detailsService.selectedDetails = {
      _id : "",
      fname: "",
      fage: 0,
      foccupation: "",
      fincome: 0,
      fdReason: "",
      fdAge: 0,
      mname: "",
      mage: 0,
      moccupation: "",
      mincome: 0,
      mdReason: "",
      mdAge: 0
    }
    M.AutoInit();
  }


//   onSubmitClick(form: NgForm) {
//     if (!form.valid) {
//         // Display a message or take any other action.
//         alert('Fill in all required details.');
//     } else {
//         // Form is valid, proceed with form submission.
//         this.onSubmit(form);
//     }
// }

// validatePositiveAge(fage: number): boolean {
//   return fage >= 0;
// }
  // onSubmit(form: NgForm) {

  //   if (this.detailsForm.valid && this.areRequiredFieldsFilled()) {
  //     // Your form submission logic here
      
  //     if (form.value._id == "") {
       
  //       this.detailsService.postDetails(form.value).subscribe((res) => {
  //         this.resetForm(form);
  //         this.refreshDetailsList();
  //         M.toast({ html: 'Saved successfully', classes: 'rounded' });
  //       });
  //     }
  //     else {
  //       this.detailsService.putDetails(form.value).subscribe((res) => {
  //         this.resetForm(form);
  //         this.refreshDetailsList();
  //         M.toast({ html: 'Updated successfully', classes: 'rounded' });
  //       });
  //     }
  //   }
  // }

  onSubmit(form: NgForm) {

      // Your form submission logic here
      
      if (this.detailsForm.valid && this.areRequiredFieldsFilled()) {
            // Your form submission logic here
            
            if (form.value._id == "") {
             
              this.detailsService.postDetails(form.value).subscribe((res) => {
                this.resetForm(form);
                this.refreshDetailsList();
                M.toast({ html: 'Saved successfully', classes: 'rounded' });
              });
            }
            else {
              this.detailsService.putDetails(form.value).subscribe((res) => {
                this.resetForm(form);
                this.refreshDetailsList();
                M.toast({ html: 'Updated successfully', classes: 'rounded' });
              });
            }
          }
    
     
    
    
  }

  areRequiredFieldsFilled(): boolean {
    return !!this.detailsService.selectedDetails.fname &&
           !!this.detailsService.selectedDetails.foccupation &&
           !!this.detailsService.selectedDetails.fincome  &&
           !!this.detailsService.selectedDetails.mname && 
           !!this.detailsService.selectedDetails.moccupation &&
           !!this.detailsService.selectedDetails.mincome
  }

  refreshDetailsList() {
    this.detailsService.getDetailsList().subscribe((res) => {
      this.detailsService.details = res as Details[];
    });
  }

  onEdit(det: Details) {
    this.detailsService.selectedDetails = det;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.detailsService.deleteDetails(_id).subscribe((res) => {
        this.refreshDetailsList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}










































// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { DetailsService } from '../shared/details.service';
// import { Details } from '../shared/details.model';

// declare var M: any;

// @Component({
//   selector: 'app-details',
//   templateUrl: './details.component.html',
//   styleUrl: './details.component.css',
//   providers: [DetailsService]
// })
// export class DetailsComponent implements OnInit{
//   constructor(public detailsService: DetailsService, private fb: FormBuilder) { }

//   ngOnInit() {
//     this.resetForm();
//     this.refreshDetailsList();
//     M.AutoInit();
//   }


//   resetForm(form?: NgForm) {
//     if (form)
//       form.reset();
//     this.detailsService.selectedDetails = {
//       _id : "",
//       fname: "",
//       fage: 0,
//       foccupation: "",
//       fincome: 0,
//       fdReason: "",
//       fdAge: 0,
//       mname: "",
//       mage: 0,
//       moccupation: "",
//       mincome: 0,
//       mdReason: "",
//       mdAge: 0
//     }
//     M.AutoInit();
//   }

//   onSubmit(form: NgForm) {
//     if (form.value._id == "") {
//       this.detailsService.postDetails(form.value).subscribe((res) => {
//         this.resetForm(form);
//         this.refreshDetailsList();
//         M.toast({ html: 'Saved successfully', classes: 'rounded' });
//       });
//     }
//     else {
//       this.detailsService.putDetails(form.value).subscribe((res) => {
//         this.resetForm(form);
//         this.refreshDetailsList();
//         M.toast({ html: 'Updated successfully', classes: 'rounded' });
//       });
//     }
//   }

//   refreshDetailsList() {
//     this.detailsService.getDetailsList().subscribe((res) => {
//       this.detailsService.details = res as Details[];
//     });
//   }

//   onEdit(det: Details) {
//     this.detailsService.selectedDetails = det;
//   }

//   onDelete(_id: string, form: NgForm) {
//     if (confirm('Are you sure to delete this record ?') == true) {
//       this.detailsService.deleteDetails(_id).subscribe((res) => {
//         this.refreshDetailsList();
//         this.resetForm(form);
//         M.toast({ html: 'Deleted successfully', classes: 'rounded' });
//       });
//     }
//   }
// }
