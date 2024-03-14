import { Component } from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Activity } from '../shared/activity.model';
declare var M: any;

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [ActivityService],
})
export class ActivityComponent {
  activityForm!: FormGroup;
  activityService: any;
  activity!: Activity;

  constructor(private service: ActivityService, private fb: FormBuilder) {
    this.activityService = service;
  }

  ngOnInit() {
    this.activityForm = this.fb.group({
      checkbox1: [false],
      checkbox2: [false],
      checkbox3: [false],
      checkbox4: [false],
      checkbox5: [false],
      checkbox6: [false],
      checkbox25: [false],
      checkbox26: [false],
      checkbox27: [false],
      checkbox28: [false],
      checkbox29: [false],
      checkbox30: [false],
    });

    this.resetForm();
    this.getActivityData();
  }

  onSubmit() {
    console.log("Values", this.activityForm.getRawValue());
    this.activityService.postActivity(this.activityForm.getRawValue())
      .subscribe(
        (res: any) => {
          console.log('Response:', res);
          M.toast({ html: 'Form submitted successfully!', classes: 'rounded' });
          this.getActivityData();
        },
        (error: any) => {
          console.error('Error in onSubmit:', error);
          M.toast({
            html: 'Error submitting form. Please try again.',
            classes: 'rounded red',
          });
        }
      );
  }

  getActivityData() {
    this.activityService.getActivities().subscribe(
      (data: Activity) => {
        this.activity = data;
        console.log(this.activity);
      },
      (error: any) => {
        console.error('Error in getActivityData:', error);
      }
    );
  }

  resetForm() {
    console.log(this.activityForm.reset());
    this.activityForm.reset();

    this.activityService.selectedActivity = {
      checkbox1: [false],
      checkbox2: [false],
      checkbox3: [false],
      checkbox4: [false],
      checkbox5: [false],
      checkbox6: [false],
      checkbox25: [false],
      checkbox26: [false],
      checkbox27: [false],
      checkbox28: [false],
      checkbox29: [false],
      checkbox30: [false],
    };
  }

  print() {
    window.print();
  }
}
