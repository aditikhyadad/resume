import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReferralService } from '../shared/referral.service';
import { Referral } from '../shared/referral.model';
import { Router } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrl: './referral.component.css',
  providers:[ReferralService]
})
export class ReferralComponent {
  constructor(public referralService:ReferralService,private router:Router){}
  ngOnInit(){
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form)
    form.reset();
  this.referralService.selectedReferral={
    _id:"",
    dateanddetails:"",
    actiontaken:"",
    referredto:"",
    organisation:"",
  }
  M.AutoInit();
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.referralService.postReferral(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshReferralList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
        this.router.navigate(['individual']);
      });
    }
    else {
      this.referralService.putReferral(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshReferralList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }
  refreshReferralList() {
  this.referralService.getReferralList().subscribe((res) => {
    this.referralService.referrals= res as Referral[];
  });
  }
  
  onEdit(ref:Referral) {
  this.referralService.selectedReferral=ref;
  }
  onDelete(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.referralService.deleteReferral(_id).subscribe((res) => {
      this.refreshReferralList();
      this.resetForm(form);
      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
  }
}
