import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientService } from '../shared/patient.service';
import { Patient} from '../shared/patient.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

declare var M: any;
 
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
  providers: [PatientService]

})
export class InfoComponent implements OnInit{
 

  constructor(public patientService: PatientService ,private router:Router) {  }
  
  ngOnInit() {
    this.resetForm();
    this.refreshpatientList();
    M.AutoInit();

  }
  
  getCurrentDate(): string {
    const currentDate = new Date();
    // Adjust for the local time zone
    currentDate.setMinutes(currentDate.getMinutes() - currentDate.getTimezoneOffset());
    return currentDate.toISOString().split('T')[0];
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.patientService.selectedPatient = {
      _id: '',
      registrationno: 0,
      dateofregistration:new Date(2000, 0, 1), // January 1, 2000;;
      name: '',
      address:'',
      taluk: '',
      district: '',
      state:  '',
      homephone:0,
      telephone:0,
      sex: '',
      age:0,
      dateofbirth: new Date(2000, 0, 1), // January 1, 2000;te;
      religion: '',
      community: '',
      educationqualification:'',
      occupation: '',
      income:0,
      maritalstatus:'',
      livingarrangements: '',
      nameoffamilymem:'',
      nameofsupperson: '',
      suppersonaddress: '',
      suppersonteleno:0,
      referral:''
    }
    M.AutoInit();
  }

  
  onSubmit(form: NgForm) {
    if (form.valid) {
      const registrationNoToCheck = form.value.registrationno;

      // Check registration number against the backend
      this.patientService.checkRegistrationNoExists(registrationNoToCheck).subscribe((registrationNoExists: boolean) => {
        if (registrationNoExists) {
          // Registration number already exists, show an error message
          M.toast({ html: 'Registration number already exists. Please choose a different one.', classes: 'rounded' });
        } else {
          // Registration number is unique, proceed with form submission
          if (form.value._id == "") {
            this.patientService.postPatient(form.value).subscribe((res) => {
              this.resetForm(form);
              this.refreshpatientList();
              M.toast({ html: 'Saved successfully', classes: 'rounded' });
              this.router.navigate(['family'])

            });
          } else {
            this.patientService.putPatient(form.value).subscribe((res) => {
              this.resetForm(form);
              this.refreshpatientList();
              M.toast({ html: 'Updated successfully', classes: 'rounded' });
            });
          }
        }
      });
    } else {
      M.toast({ html: 'Please fill in all required fields.', classes: 'rounded' });
    }
  }

  refreshpatientList() {
    this.patientService.getPatientList().subscribe((res) => {
      this.patientService.Patient = res as Patient[];
    });
  }

  onEdit(sib: Patient) {
    this.patientService.selectedPatient = sib;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.patientService.deletePatient(_id).subscribe((res) => {
        this.refreshpatientList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

 


}




