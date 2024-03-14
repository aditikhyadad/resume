import { Component, OnInit } from '@angular/core';
import { Marital2 } from '../shared/marital2.model';
import { Marital2Service } from '../shared/marital2.service';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-marital2',
  templateUrl: './marital2.component.html',
  styleUrl: './marital2.component.css'
})
export class Marital2Component implements OnInit {

  constructor(public marital2Service: Marital2Service) { }

  ngOnInit() {
    this.resetForm();
    this.refreshMarital2List();
    M.AutoInit();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.marital2Service.selectedMarital2 = {
      _id : "",
      name : "",
      age : 0,
      religion : "",
      education : "",
      occupation : "",
      income : "",
    no_years: 0,
    choice : "",
    previous_mar: "",
    separated1: false,
    separated2 :0,
    wife :false,
    violence :false,
    violence1 :false,
    violence2 : false,
    violence3 : false,
    violence4: false,
    child_m : 0,
    child_f : 0
    }
    M.AutoInit();
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.marital2Service.postMarital2(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshMarital2List();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.marital2Service.putMarital2(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshMarital2List();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshMarital2List() {
    this.marital2Service.getMarital2List().subscribe((res) => {
      this.marital2Service.marital2 = res as Marital2[];
    });
  }

  onEdit(sib: Marital2) {
    this.marital2Service.selectedMarital2 = sib;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.marital2Service.deleteMarital2(_id).subscribe((res) => {
        this.refreshMarital2List();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
