import { Component } from '@angular/core';
import { AdolescenceService } from '../shared/adolescence.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Adolescence } from '../shared/adolescence.model';
import { OnInit } from '@angular/core';
declare var M: any;


@Component({
  selector: 'app-adolescence',
  templateUrl: './adolescence.component.html',
  styleUrl: './adolescence.component.css',
  providers:[AdolescenceService]
})
export class AdolescenceComponent implements OnInit {
  adolescenceform!:FormGroup;
  adolservice:any;
  adolss!: Adolescence ;

  constructor(private adols:AdolescenceService,private fb:FormBuilder){
    this.adolservice=adols;
    
  }

  ngOnInit()
  {
    this.adolescenceform=this.fb.group({
      checkbox1:[false,Validators.required],
      checkbox2:[false,Validators.required],
      checkbox3:[false,Validators.required],
      checkbox4:[false,Validators.required],
      checkbox5:[false,Validators.required],
      checkbox6:[false,Validators.required],
      checkbox7:[false,Validators.required],
      checkbox8:[false,Validators.required],
    })
    this.resetForm();
    this.getAdolData();
  }

  onSubmit()
  {
    console.log("Values",this.adolescenceform.getRawValue());
    this.adolservice.postAdol(this.adolescenceform.getRawValue())
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
      this.getAdolData();
      this.resetForm();
  }

  getAdolData() {
    this.adolservice.getAdol().subscribe(
      (data: Adolescence) => {
        this.adolss = data;
        // console.log(this.adolss)
      },
      (error:any) => {
        console.error('Error in getAdolData:', error);
      }
    );
  }

  resetForm() {
    // alert('500');
    console.log(this.adolescenceform.reset());
    this.adolescenceform.reset();

    // this.familyhistorys.selectedFamilyhistory=new Familyhistory();

    this.adolservice.selectedadol = {
      checkbox1:[false],
      checkbox2:[false],
      checkbox3:[false],
      checkbox4:[false],
      checkbox5:[false],
      checkbox6:[false],
      checkbox7:[false],
      checkbox8:[false]
    };
}
}
