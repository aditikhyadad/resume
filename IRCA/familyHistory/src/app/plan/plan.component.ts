import { Component } from '@angular/core';
import { PlanService } from '../shared/plan.service';
import { NgForm } from '@angular/forms';
import { Plan } from '../shared/plan.model';
import { Router } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css',
  providers:[PlanService]
})
export class PlanComponent {
constructor(public planService:PlanService,private router:Router){}
ngOnInit(){
  this.resetForm();
}
resetForm(form?:NgForm){
  if (form)
  form.reset();
this.planService.selectedPlan = {
  _id: "",
  sa:"",
  tf:"",
  sa1:"",
  tf1:"",
  sa2:"",
  tf2:"",
  sa3:"",
  tf3:"",
  sa4:"",
  tf4:"",
  sa5:"",
  tf5:"",
  sa6:"",
  tf6:"",
  sa7:"",
  tf7:"",
  sa8:"",
  tf8:"",
  dropout:"",
  date:"",
  lackofmotivation:"",
  lackoffamilysupport:"",
  poverty:"",
  legalproblem:"",
  unabletocope:"",
  inadequatefacilities:"",
  anyother:"",
  days:"",
  months:"",
  reasons:"",
}
M.AutoInit();
}

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.planService.postPlan(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPlanList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
        this.router.navigate(['print'])
      });
    }
    else {
      this.planService.putPlan(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPlanList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
}
refreshPlanList() {
  this.planService.getPlanList().subscribe((res) => {
    this.planService.plan = res as Plan[];
  });
}

onEdit(pla: Plan) {
  this.planService.selectedPlan = pla;
}
onDelete(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.planService.deletePlan(_id).subscribe((res) => {
      this.refreshPlanList();
      this.resetForm(form);
      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}
}
