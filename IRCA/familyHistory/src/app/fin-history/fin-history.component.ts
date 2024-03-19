import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  FinHistoryService} from '../shared/fin-history.service';
import { FinHistory} from '../shared/fin-history.model';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-fin-history',
  templateUrl: './fin-history.component.html',
  styleUrl: './fin-history.component.css',
  providers:[FinHistoryService]
})
export class FinHistoryComponent implements OnInit{
  
  constructor(public finhistoryService: FinHistoryService,public router:Router) {  }

  ngOnInit() {
    this.resetForm();
    this.refreshFinHistoryList();
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
    this.finhistoryService.selectedFinancial = {
        _id :'',
        family_friends :0,
        banks :0,
        workplace :0,
        lenders :0,
        pawnshops :0,
        othershops :0,
        mild:'',
        moderate:'',
        severe:'',
    }
    M.AutoInit();
  }

  
  onSubmit(form: NgForm) {
    
    
    if (form.value._id == "") {
      this.finhistoryService.postFinHistory(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshFinHistoryList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
        this.router.navigate(['medical']);
      });
    }
    else {
      this.finhistoryService.putFinHistory(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshFinHistoryList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshFinHistoryList() {
    this.finhistoryService.getFinHistoryList().subscribe((res) => {
      this.finhistoryService.FinHistory = res as FinHistory[];
    });
  }

  onEdit(sib: FinHistory) {
    this.finhistoryService.selectedFinancial = sib;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.finhistoryService.deleteFinHistory(_id).subscribe((res) => {
        this.refreshFinHistoryList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

 
}
