import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SiblingService } from '../shared/sibling.service';
import { Sibling } from '../shared/sibling.model';

declare var M: any;

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrl: './sibling.component.css',
  providers: [SiblingService]
})

export class SiblingComponent implements OnInit {

  constructor(public siblingService: SiblingService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshSiblingList();
    M.AutoInit();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.siblingService.selectedSibling = {
      _id: "",
      relationship: "",
      age: 0,
      education: "",
      occupation: ""
    }
    M.AutoInit();
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      if (this.validatePositiveAge(form.value.age)) {
        this.siblingService.postSibling(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshSiblingList();
          M.toast({ html: 'Saved successfully', classes: 'rounded' });
        });
      }

      else {
        alert('Age should be a positive number.');
      }
    }
    else {
      this.siblingService.putSibling(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSiblingList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }

  }

  refreshSiblingList() {
    this.siblingService.getSiblingList().subscribe((res) => {
      this.siblingService.sibling = res as Sibling[];
    });
  }
  validatePositiveAge(age: number): boolean {
    return age > 0;
  }


  onEdit(sib: Sibling) {
    this.siblingService.selectedSibling = sib;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.siblingService.deleteSibling(_id).subscribe((res) => {
        this.refreshSiblingList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}