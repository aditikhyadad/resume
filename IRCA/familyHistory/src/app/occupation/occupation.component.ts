import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var M: any;
import { OccupationService } from '../shared/occupation.service';
import { Occupation } from '../shared/occupation.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrl: './occupation.component.css',
  providers:[OccupationService]
})
export class OccupationComponent {

  occupationForm!:FormGroup;
  occservice:any;
  occ!:Occupation;

  constructor(private o:OccupationService,private fb:FormBuilder){
    this.occservice=o;
  }

  ngOnInit()
  {
    this.occupationForm=this.fb.group({
      age:["",Validators.required],
      duration:["",Validators.required],
      special:["",Validators.required],
      check1:[false,Validators.required],
      check2:[false,Validators.required],
      check3:[false,Validators.required],
      check4:[false,Validators.required],
      reason:["",Validators.required],
    })
    this.resetForm();
    this.getOccData();
  }

  onSubmit()
  {
    console.log("Values",this.occupationForm.getRawValue());
    this.occservice.postOcc(this.occupationForm.getRawValue())
      .subscribe(
        (res: any) => {
          console.log('Response:', res);
          // alert(550);
          M.toast({ html: 'Form submitted successfully!', classes: 'rounded' });
          this.getOccData();
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

  getOccData() {
    this.occservice.getOcc().subscribe(
      (data: Occupation) => {
        this.occ = data;
        // console.log(this.occ)
      },
      (error:any) => {
        console.error('Error in getAdolData:', error);
      }
    );
  }

  resetForm()
  {
    // alert('500');
    console.log(this.occupationForm.reset());
    this.occupationForm.reset();

    // this.familyhistorys.selectedFamilyhistory=new Familyhistory();

    this.occservice.selectedOcc = {
      
      age:"",
      duration:"",
      special:"",
      check1:[false],
      check2:[false],
      check3:[false],
      check4:[false],
      reason:""
    };
  }

  // refreshDetailsList() {
  //   this.occservice.getOcc().subscribe((res) => {
  //     this.occservice.details = res as Occupation[];
  //   });
  }



