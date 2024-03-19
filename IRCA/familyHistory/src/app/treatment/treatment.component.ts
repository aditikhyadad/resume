import { Component , OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import { TreatmentService } from '../shared/treatment.service';
import { Treatment } from '../shared/treatment.model';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrl: './treatment.component.css',
  providers: [TreatmentService]
})
export class TreatmentComponent implements OnInit{

  constructor(public treatmentService: TreatmentService,private router:Router) { }
  
  ngOnInit() {
    this.resetForm();
    this.refreshTreatmentList();
    M.AutoInit();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.treatmentService.selectedTreatment = {
      _id: "",
      year: new Date,
      place: "",
      period: 0,
      sobriety: 0,
      reason: "",
      relapse: ""
    }
    M.AutoInit();
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.treatmentService.postTreatment(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTreatmentList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
        this.router.navigate(['medical-history'])
      });
    }
    else {
      this.treatmentService.putTreatment(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTreatmentList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshTreatmentList() {
    this.treatmentService.getTreatmentList().subscribe((res) => {
      this.treatmentService.Treatment = res as Treatment[];
    });
  }

  onEdit(sib: Treatment) {
    this.treatmentService.selectedTreatment = sib;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.treatmentService.deleteTreatment(_id).subscribe((res) => {
        this.refreshTreatmentList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  
}
