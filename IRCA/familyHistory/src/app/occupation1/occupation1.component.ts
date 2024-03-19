import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Occupation1 } from '../shared/occupation1.model';
import { Occupation1Service } from '../shared/occupation1.service';
declare var M: any;



@Component({
  selector: 'app-occupation1',
  templateUrl: './occupation1.component.html',
  styleUrl: './occupation1.component.css',
  providers:[Occupation1Service]
})
export class Occupation1Component {

  occupationForm1!:FormGroup;
  occservice:any;
  occ1!:Occupation1;

  constructor(private o:Occupation1Service,private fb:FormBuilder){
    this.occservice=o;
  }

  ngOnInit()
  {
    this.occupationForm1=this.fb.group({
      checkbox1:[false,Validators.required],
      checkbox2:[false,Validators.required],
      checkbox3:[false,Validators.required],
      checkbox4:[false,Validators.required],
      checkbox5:[false,Validators.required],
      checkbox6:[false,Validators.required],
      checkbox7:[false,Validators.required],
      time:["",Validators.required],
    })
    // this.resetForm();
    // this.getAdolData();
  }

  onSubmit()
  {
    console.log("Values",this.occupationForm1.getRawValue());
    this.occservice.postOcc(this.occupationForm1.getRawValue())
      .subscribe(
        (res: any) => {
          console.log('Response:', res);
          // alert(550);
          M.toast({ html: 'Form submitted successfully!', classes: 'rounded' });
          this.getOcc1Data();
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

  getOcc1Data() {
    this.occservice.getOcc1().subscribe(
      (data: Occupation1) => {
        this.occ1 = data;
        console.log(this.occ1)
      },
      (error:any) => {
        console.error('Error in getAdolData:', error);
      }
    );
  }

  resetForm()
  {
    // alert('500');
    console.log(this.occupationForm1.reset());
    this.occupationForm1.reset();

    // this.familyhistorys.selectedFamilyhistory=new Familyhistory();

    this.occservice.selectedOcc1 = {
      
      checkbox1:[false],
      checkbox2:[false],
      checkbox3:[false],
      checkbox4:[false],
      checkbox5:[false],
      checkbox6:[false],
      checkbox7:[false],
      time:""
    };
  }


}
