import { Component } from '@angular/core';
import { AreService } from '../shared/are.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Are } from '../shared/are.model';
declare var M: any;

@Component({
  selector: 'app-are',
  templateUrl: './are.component.html',
  styleUrls: ['./are.component.css'],
  providers: [AreService],
})
export class AreComponent {
  areForm!: FormGroup;
  areService: AreService;
  are!: Are;

  constructor(private service: AreService, private fb: FormBuilder) {
    this.areService = service;
  }

  ngOnInit() {
    this.areForm = this.fb.group({
      checkbox7: [false],
      checkbox8: [false],
      checkbox9: [false],
      checkbox10: [false],
      checkbox11: [false],
      checkbox12: [false],
      checkbox13: [false],
      checkbox14: [false],
      checkbox15: [false],
      checkbox16: [false],
      checkbox17: [false],
      checkbox18: [false],
      checkbox19: [false],
      checkbox20: [false],
      checkbox21: [false],
      checkbox22: [false],
      checkbox23: [false],
      checkbox24: [false],
    }, {
      validator: this.validateCheckboxes.bind(this)
    });

    this.resetForm();
    this.getAreData();
  }

  validateCheckboxes(group: FormGroup) {
    this.validateExclusiveSelection(group, ['checkbox7', 'checkbox8']);
    this.validateExclusiveSelection(group, ['checkbox9', 'checkbox10']);
    this.validateExclusiveSelection(group, ['checkbox11', 'checkbox12']);
    this.validateExclusiveSelection(group, ['checkbox13', 'checkbox14', 'checkbox15']);
    this.validateExclusiveSelection(group, ['checkbox16', 'checkbox17', 'checkbox18']);
    this.validateExclusiveSelection(group, ['checkbox19', 'checkbox20', 'checkbox21']);
    this.validateExclusiveSelection(group, ['checkbox22', 'checkbox23', 'checkbox24']);
  }

  validateExclusiveSelection(group: FormGroup, checkboxes: string[]) {
    const selectedCheckboxes = checkboxes.filter(checkbox => group.get(checkbox)?.value);
    
    if (selectedCheckboxes.length !== 1) {
      checkboxes.forEach(checkbox => {
        group.get(checkbox)?.setErrors({ requireOneCheckbox: true });
      });
    } else {
      checkboxes.forEach(checkbox => {
        group.get(checkbox)?.setErrors(null);
      });
    }
  }

  onSubmit() {
    if (this.areForm.valid) {
      console.log("Values", this.areForm.getRawValue());
      this.areService.postAre({ id: 1, ...this.areForm.getRawValue() })
        .subscribe(
          (res: any) => {
            console.log('Response:', res);
            if (typeof M !== 'undefined') {
              M.toast({ html: 'Form submitted successfully!', classes: 'rounded' });
            } else {
              console.warn('Materialize CSS not initialized.');
            }
            this.getAreData();
          },
          (error: any) => {
            console.error('Error in onSubmit:', error);
            if (typeof M !== 'undefined') {
              M.toast({
                html: 'Error submitting form. Please try again.',
                classes: 'rounded red',
              });
            } else {
              console.error('Materialize CSS not initialized.');
            }
          }
        );
    } else {
      M.toast({
        html: 'Please choose exactly one option for each group of checkboxes.',
        classes: 'rounded red',
      });
    }
  }

  getAreData() {
    this.areService.getAres().subscribe(
      (data: Are []) => {
        this.are = data[0];
        console.log(this.are);
      },
      (error: any) => {
        console.error('Error in getAreData:', error);
      }
    );
  }

  resetForm() {
    this.areForm.reset();
    this.areService.selectedAre = {
      id: null,
      checkbox7: false,
      checkbox8: false,
      checkbox9: false,
      checkbox10: false,
      checkbox11: false,
      checkbox12: false,
      checkbox13: false,
      checkbox14: false,
      checkbox15: false,
      checkbox16: false,
      checkbox17: false,
      checkbox18: false,
      checkbox19: false,
      checkbox20: false,
      checkbox21: false,
      checkbox22: false,
      checkbox23: false,
      checkbox24: false,
    };
  }
  print() {
    window.print();
  }
  
}
