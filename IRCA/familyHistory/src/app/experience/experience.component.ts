import { Component } from '@angular/core';
import { ExperienceService } from '../shared/experience.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Experience } from '../shared/experience.model';
declare var M: any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  providers:[ExperienceService]
})
export class ExperienceComponent {
  experienceform!:FormGroup;
  expservice:any;
  exp!: Experience ;

  constructor(private adols:ExperienceService,private fb:FormBuilder)
  {
    this.expservice=adols;
  }

  ngOnInit()
  {
    this.experienceform=this.fb.group({
      checkbox9:[false,Validators.required],
      checkbox10:[false,Validators.required],
      checkbox11:[false,Validators.required],
      checkbox12:[false,Validators.required],
      checkbox13:[false,Validators.required],
      checkbox14:[false,Validators.required],
      checkbox15:[false,Validators.required],
      checkbox16:[false,Validators.required],
    })
    this.resetForm();
    this.getAdolData();
  }
  onSubmit()
  {
    console.log("Values",this.experienceform.getRawValue());
    this.expservice.postexp(this.experienceform.getRawValue())
      .subscribe(
        (res: any) => {
          console.log('Response:', res);
          // alert(550);
          M.toast({ html: 'Form submitted successfully!', classes: 'rounded' });
          this.getAdolData();
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
  getAdolData() {
    this.expservice.getexp().subscribe(
      (data: Experience) => {
        this.exp = data;
        // console.log(this.exp)
      },
      (error:any) => {
        console.error('Error in getAdolData:', error);
      }
    );
  }

  resetForm()
  {
    // alert('500');
    console.log(this.experienceform.reset());
    this.experienceform.reset();

    // this.familyhistorys.selectedFamilyhistory=new Familyhistory();

    this.expservice.selectedadol = {
      checkbox9:[false],
      checkbox10:[false],
      checkbox11:[false],
      checkbox12:[false],
      checkbox13:[false],
      checkbox14:[false],
      checkbox15:[false],
      checkbox16:[false]
    };
  }

}
