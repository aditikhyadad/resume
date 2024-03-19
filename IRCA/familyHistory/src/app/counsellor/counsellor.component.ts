import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CounsellorService } from '../shared/counsellor.service';
import { Counsellor } from '../shared/counsellor.model';
import { Router } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-counsellor',
  templateUrl: './counsellor.component.html',
  styleUrl: './counsellor.component.css',
  providers:[CounsellorService]
})
export class CounsellorComponent {
constructor(public counsellorService:CounsellorService,private router:Router){}
ngOnInit(){
  this.resetForm();
}
resetForm(form?:NgForm){
  if(form)
  form.reset();
this.counsellorService.selectedCounsellor={
  _id:"",
  date:"",
  issues:"",
  date1:"",
  issues1:"",
  date2:"",
  issues2:"",
  date3:"",
  issues3:"",
  date4:"",
  issues4:"",
  date5:"",
  issues5:"",
  date6:"",
  issues6:"",
  date7:"",
  issues7:"",
}
M.AutoInit();
}
onSubmit(form: NgForm) {
  if (form.value._id == "") {
    this.counsellorService.postCounsellor(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshCounsellorList();
      M.toast({ html: 'Saved successfully', classes: 'rounded' });
      this.router.navigate(['plan']);
    });
  }
  else {
    this.counsellorService.putCounsellor(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshCounsellorList();
      M.toast({ html: 'Updated successfully', classes: 'rounded' });
    });
  }
}
refreshCounsellorList() {
this.counsellorService.getCounsellorList().subscribe((res) => {
  this.counsellorService.counsellor= res as Counsellor[];
});
}

onEdit(coun:Counsellor) {
this.counsellorService.selectedCounsellor = coun;
}
onDelete(_id: string, form: NgForm) {
if (confirm('Are you sure to delete this record ?') == true) {
  this.counsellorService.deleteCounsellor(_id).subscribe((res) => {
    this.refreshCounsellorList();
    this.resetForm(form);
    M.toast({ html: 'Deleted successfully', classes: 'rounded' });
  });
}
}
}
