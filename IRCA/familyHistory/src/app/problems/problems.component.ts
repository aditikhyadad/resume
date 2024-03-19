import { Component, OnInit } from '@angular/core';
import { ProblemsService } from '../shared/problems.service';
import { NgForm } from '@angular/forms';
import { Problems } from '../shared/problems.model';
declare var M: any;
@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrl: './problems.component.css',
  providers : [ProblemsService]
})


export class ProblemsComponent implements OnInit {

  constructor(public problemsService: ProblemsService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshProblemsList();
    M.AutoInit();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.problemsService.selectedProblems = {
      _id : "",
      depression  : "",
      d2 : false,
      d3 : false,
      d4 : false,
      suicide  : "",
      s2 : false,
      s3 : false,
      s4 : false,
      psychiatric : "",
      p2 : false,
      p3 : false,
      p4 : false,
      alcohol : "",
      a2 : false,
      a3 : false,
      a4 : false,
      drug : "",
      dr2 : false,
      dr3 : false,
      dr4 : false,

    }
  }

  onSubmit(form: NgForm) {
    console.log("Form data:", form.value);
    if (form.value._id == "") {
      
      this.problemsService.postProblems(form.value).subscribe((res) => {
        // this.resetForm(form);
        // this.refreshProblemsList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      console.log("Updated = " + form.value);
      this.problemsService.deleteProblems(form.value._id).subscribe(() => {
          // After deletion, add the updated record
          this.problemsService.putProblems(form.value).subscribe(() => {
              // this.resetForm(form);
              // this.refreshProblemsList();
              M.toast({ html: 'Updated successfully', classes: 'rounded' });
          });
      });
    }
  }

  refreshProblemsList() {
    this.problemsService.getProblemsList().subscribe((res) => {
      this.problemsService.problems = res as Problems[];
    });
  }

  onEdit(det: Problems) {
    console.log(det)
    // this.problemsService.selectedProblems = {
    //   _id: form.value._id,
    //   depression: form.value.depression,
    //   suicide: form.value.suicide,
    //   psychiatric: form.value.psychiatric,
    //   alcohol: form.value.alcohol,
    //   drug: form.value.drug
    // }
   
    // console.log(this.problemsService.selectedProblems)
    // this.problemsService.putProblems(det).subscribe(() =>{
    //   M.toast({ html: 'Updated successfully', classes: 'rounded' });

    // })
   // console.log(det)
    this.problemsService.selectedProblems = det;
    //this.problemsService.selectedProblems.suicide.value = det.suicide.value
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.problemsService.deleteProblems(_id).subscribe((res) => {
        this.refreshProblemsList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
