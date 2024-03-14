import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LegalhistoryService } from '../shared/legalhistory.service';
import { Legalhistory} from '../shared/legalhistory.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-legalhistory',
  templateUrl: './legalhistory.component.html',
  styleUrl: './legalhistory.component.css',
  providers:[LegalhistoryService]
})
export class LegalhistoryComponent implements OnInit {
  
  constructor(public legalhistoryService: LegalhistoryService) {  }
  
  ngOnInit() {
    this.resetForm();
    this.refreshpatientList();
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
    this.legalhistoryService.selectedLegalhistory = {
      _id: '',
      saleofdrugs: 0,
      possessionofdrugs:0, 
      arrestedfordrunkenbehaviour: 0,
      finedfordrunkendriving:0,
      accindentunderinfluence:0,
      assault:0,
      anyother: 0
    }
    M.AutoInit();
  }

  
  onSubmit(form: NgForm) {
    
    
    if (form.value._id == "") {
      this.legalhistoryService.postLegalhistory(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshpatientList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.legalhistoryService.putLegalhistory(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshpatientList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshpatientList() {
    this.legalhistoryService.getLegalhistoryList().subscribe((res) => {
      this.legalhistoryService.Legalhistory = res as Legalhistory[];
    });
  }

  onEdit(sib: Legalhistory) {
    this.legalhistoryService.selectedLegalhistory = sib;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.legalhistoryService.deleteLegalhistory(_id).subscribe((res) => {
        this.refreshpatientList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }


} 
