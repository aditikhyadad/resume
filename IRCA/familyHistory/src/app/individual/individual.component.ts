import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IndividualService } from '../shared/individual.service';
import { Individual } from '../shared/individual.model';
import { Router } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.css',
  providers:[IndividualService]
})
export class IndividualComponent {
  constructor(public individualService:IndividualService,private router:Router){}
  ngOnInit(){
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form)
    form.reset();
  this.individualService.selectedIndividual={
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
    date8:"",
    issues8:"",
    date9:"",
    issues9:"",
    date10:"",
    issues10:"",
    date11:"",
    issues11:"",
  }
  M.AutoInit();
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.individualService.postIndividual(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshIndividualList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
        this.router.navigate(['counsellor']);
      });
    }
    else {
      this.individualService.putIndividual(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshIndividualList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }
  refreshIndividualList() {
  this.individualService.getIndividualList().subscribe((res) => {
    this.individualService.individuals= res as Individual[];
  });
  }
  
  onEdit(indi:Individual) {
  this.individualService.selectedIndividual = indi;
  }
  onDelete(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.individualService.deleteIndividual(_id).subscribe((res) => {
      this.refreshIndividualList();
      this.resetForm(form);
      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
  }
}

