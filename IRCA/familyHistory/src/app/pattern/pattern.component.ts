import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PatternService } from '../shared/pattern.service';
import { Pattern } from '../shared/pattern.model';

declare var M: any;

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrl: './pattern.component.css',
  providers : [PatternService]
})
export class PatternComponent implements OnInit{

  constructor(public patternService: PatternService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshPatternList();
    M.AutoInit();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.patternService.selectedPattern = {
        _id : '',
        family : [{
            f1: false,
            f2: false,
            f3: false,
            f4: false,
        }],
        disowned : [{
            d1: false,
            d2: false,
            d3: false,
            d4: false,
        }],
        mixed : [{
            m1: false,
            m2: false,
            m3: false,
            m4: false,
        }],
        conflict : [{
            c1: false,
            c2: false,
            c3: false,
            c4: false,
        }]
    }
    M.AutoInit();
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      // console.log('Submitted data:', form.value);
      const formData = JSON.parse(JSON.stringify(this.patternService.selectedPattern));

      // Log the copied data
      console.log('Submitted data:', formData);
    
      this.patternService.postPattern(formData).subscribe((res) => {
        // this.resetForm(form);
        // this.refreshPatternList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      const formData = JSON.parse(JSON.stringify(this.patternService.selectedPattern));

      // Log the copied data
      console.log('Submitted data:', formData);
      this.patternService.putPattern(formData).subscribe((res) => {
        // this.resetForm(form);
        // this.refreshPatternList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshPatternList() {
    this.patternService.getPatternList().subscribe((res) => {
      this.patternService.pattern = res as Pattern[];
    });
  }

  onEdit() {
    // this.patternService.selectedPattern = sib;
    this.patternService.selectedPattern = JSON.parse(JSON.stringify(this.patternService.pattern[0]));
    M.toast({ html: 'Editing entire pattern', classes: 'rounded' });
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.patternService.deletePattern(_id).subscribe((res) => {
        this.refreshPatternList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
