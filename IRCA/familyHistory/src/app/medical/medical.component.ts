import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicalService } from '../shared/medical.service';
import { Medical } from '../shared/medical.model';
import { Router } from '@angular/router';
declare var M: any;
@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrl: './medical.component.css',
  providers:[MedicalService]
})
export class MedicalComponent {
  constructor(public medicalService:MedicalService,private router:Router){}
  ngOnInit(){
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form)
    form.reset();
  this.medicalService.selectedMedical={
    _id:"",
   regno:"",
   name1:"",
   Ageofperson:"",
   dateforregistration:"",
  drugs:"",
  Age:"",
  years:"",
  excessive:"",
  specifictype:"",
  route:"",
  frequency:"",
  quantity:"",
  pastuseifany:"",
  drugs1:"",
  Age1:"",
  years1:"",
  excessive1:"",
  specifictype1:"",
  route1:"",
  frequency1:"",
  quantity1:"",
  pastuseifany1:"",
  drugs2:"",
  Age2:"",
  years2:"",
  excessive2:"",
  specifictype2:"",
  route2:"",
  frequency2:"",
  quantity2:"",
  pastuseifany2:"",
  drugs3:"",
  Age3:"",
  years3:"",
  excessive3:"",
  specifictype3:"",
  route3:"",
  frequency3:"",
  quantity3:"",
  pastuseifany3:"",
  drugs4:"",
  Age4:"",
  years4:"",
  excessive4:"",
  specifictype4:"",
  route4:"",
  frequency4:"",
  quantity4:"",
  pastuseifany4:"",
  drugs5:"",
  Age5:"",
  years5:"",
  excessive5:"",
  specifictype5:"",
  route5:"",
  frequency5:"",
  quantity5:"",
  pastuseifany5:"",
  drugs6:"",
  Age6:"",
  years6:"",
  excessive6:"",
  specifictype6:"",
  route6:"",
  frequency6:"",
  quantity6:"",
  pastuseifany6:"",
  }
  M.AutoInit();
  }
  onSubmit(form: NgForm) {
    // Custom validation for name, age, registration number, and date of registration
    if (!this.validateForm(form)) {
      return;
    }
    if (form.value._id == "") {
      this.medicalService.postMedical(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshMedicalList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
        this.router.navigate(['referral']);
      });
    } else {
      this.medicalService.putMedical(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshMedicalList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }
  
  // Custom validation function
  validateForm(form: NgForm): boolean {
    const nameRegex: RegExp = /^[a-zA-Z\s]*$/;
    const ageRegex: RegExp = /^\d+$/;
    const dateFormatRegex: RegExp = /^\d{4}-\d{2}-\d{2}$/;
  
    // Validate Name (only letters)
    if (!nameRegex.test(form.value.name1)) {
      alert('Please enter the valid credentials');
      return false;
    }
  
    // Validate Age (numeric, less than 150)
    const ageValue: number = parseInt(form.value.Ageofperson, 10);
    if (!ageRegex.test(form.value.Ageofperson) || ageValue >= 150) {
      alert('Please enter the valid credentials');
      return false;
    }
  
    // Validate Registration Number (you can add your own validation here)
    // For now, it checks if it's not empty
    if (!form.value.regno.trim()) {
      alert('Please enter the valid credentials.');
      return false;
    }
  
    // Validate Date of Registration (in "YYYY-MM-DD" format)
    if (!dateFormatRegex.test(form.value.dateforregistration)) {
      alert('Please enter the valid credentials');
      return false;
    }
  
    return true;
  }
  // Custom validation function for table rows
  
  
  refreshMedicalList() {
  this.medicalService.getMedicalList().subscribe((res) => {
    this.medicalService.medicals= res as Medical[];
  });
  }
  
  onEdit(med:Medical) {
  this.medicalService.selectedMedical=med;
  }
  onDelete(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.medicalService.deleteMedical(_id).subscribe((res) => {
      this.refreshMedicalList();
      this.resetForm(form);
      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
  }
  
}
