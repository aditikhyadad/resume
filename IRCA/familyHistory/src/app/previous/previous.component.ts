
import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { PreviousService } from '../shared/previous.service';
import { Previous } from '../shared/previous.model';

declare var M: any;

@Component({
  selector: 'app-previous', // Replace 'your-component' with your actual component selector
  templateUrl: './previous.component.html', // Replace 'your-component.component.html' with your actual HTML file
  styleUrl: './previous.component.css', // Replace 'your-component.component.css' with your actual CSS file
  providers: [PreviousService]
})

export class PreviousComponent implements OnInit {
 
  constructor(public previousService: PreviousService) { }

  ngOnInit() {
    this.resetForm();
    // this.refreshPreviousList();
    // M.AutoInit();
  }
  
  resetForm(form?: NgForm){
    if (form)
        form.reset();
      this.previousService.selectedPrevious = {
        _id:'',
        datebox:"",
        Sweatingw: false,
        Palpitationw: false,
        Tremorsw:false,
        Insomniaw:false,
        Fitsw: false,
        Nauseaw: false,
        Achesw: false,
        Anxietyw: false,
        Transientw: false,
        Auditoryw: false,
    Haematemesisha: false,
     Jaundiceha:false,
    Headha: false,
    Seizureha: false,
    Abscessesha: false,
    Bleedingha: false,
    Skinha:  false,
    Nerveha:  false,
    Anyha: false,
    Noneha: false,
  
     Haematemesishr: false,
    Jaundicehr:false,
    Headhr:false,
    Seizurehr:false,
    Abscesseshr: false,
    Bleedinghr: false,
    Skinhr: false,
    Nervehr:false,
    Anyhr:false,
  
    Diabetesc:false,
    Liverc: false,
    Epilepsyc: false,
    Cardiacc:false,
    Infectionsc: false,
    Pulmonaryc: false,
    Chronic_bc: false,
    Chronic_ac: false,
    othersbox: "", 
  
   Seizureoa: false,
    Depressionoa: false,
    Suicidaloa: false,
    Confusionoa: false,
    Aggressiveoa:  false,
    Hallucinationoa: false,
    Paranoiaoa: false,
    Noneoa: false,
    
  
    Seizureor: false,
    Depressionor:  false,
    Suicidalor:false,
    Confusionor:false,
    Aggressiveor: false,
    Hallucinationor:  false,
    Paranoiaor: false,
  

    Hist_of_prev_head: "",
    Knowledge: "",
    Type_of_drug: "",
    Mention_who:""

      }
    M.AutoInit();

   }
   
 



  //  showAlert(): boolean {
  //   let isValid = true;
  //   let errorMessages: string[] = [];
  
  //   // Check the datebox
  //   const dateboxValue = this.previousService.selectedPrevious.datebox.trim();
  
  //   if (dateboxValue === '') {
  //     errorMessages.push('No number of days entered!');
  //     isValid = false;
  //   } else {
  //     const numberOfDays = parseInt(dateboxValue, 10);
  
  //     if (Number.isNaN(numberOfDays) || numberOfDays <= 0) {
  //       errorMessages.push('Invalid number of days!');
  //       isValid = false;
  //     } else {
  //       // Check the first set of checkboxes
  //       const checkboxes1 = [
  //         this.previousService.selectedPrevious.Sweatingw,
  //         this.previousService.selectedPrevious.Palpitationw,
  //         this.previousService.selectedPrevious.Tremorsw,
  //         this.previousService.selectedPrevious.Insomniaw,
  //         this.previousService.selectedPrevious.Fitsw,
  //         this.previousService.selectedPrevious.Nauseaw,
  //         this.previousService.selectedPrevious.Achesw,
  //         this.previousService.selectedPrevious.Anxietyw,
  //         this.previousService.selectedPrevious.Transientw,
  //         this.previousService.selectedPrevious.Auditoryw
  //       ];
  
  //       if (!checkboxes1.some(checkbox => checkbox)) {
  //         errorMessages.push('At least one checkbox from the first set must be checked!');
  //         isValid = false;
  //       }
  
  //       // Check the second set of checkboxes
  //       const checkboxes2 = [
  //         this.previousService.selectedPrevious.Haematemesisha,
  //         this.previousService.selectedPrevious.Jaundiceha,
  //         this.previousService.selectedPrevious.Headha,
  //         this.previousService.selectedPrevious.Seizureha,
  //         this.previousService.selectedPrevious.Abscessesha,
  //         this.previousService.selectedPrevious.Bleedingha,
  //         this.previousService.selectedPrevious.Skinha,
  //         this.previousService.selectedPrevious.Nerveha,
  //         this.previousService.selectedPrevious.Anyha,
  //         this.previousService.selectedPrevious.Noneha
  //       ];
  
  //       if (!checkboxes2.some(checkbox => checkbox)) {
  //         errorMessages.push('At least one checkbox from the second set must be checked!');
  //         isValid = false;
  //       }
  
  //       // Check the third set of checkboxes
  //       const checkboxes3 = [
  //         this.previousService.selectedPrevious.Haematemesishr,
  //         this.previousService.selectedPrevious.Jaundicehr,
  //         this.previousService.selectedPrevious.Headhr,
  //         this.previousService.selectedPrevious.Seizurehr,
  //         this.previousService.selectedPrevious.Abscesseshr,
  //         this.previousService.selectedPrevious.Bleedinghr,
  //         this.previousService.selectedPrevious.Skinhr,
  //         this.previousService.selectedPrevious.Nervehr,
  //         this.previousService.selectedPrevious.Anyhr
  //       ];
  
  //       if (!checkboxes3.some(checkbox => checkbox)) {
  //         errorMessages.push('At least one checkbox from the third set must be checked!');
  //         isValid = false;
  //       }
  
  //       // Check the new set of checkboxes
  //       const checkboxes4 = [
  //         this.previousService.selectedPrevious.Diabetesc,
  //         this.previousService.selectedPrevious.Liverc,
  //         this.previousService.selectedPrevious.Epilepsyc,
  //         this.previousService.selectedPrevious.Cardiacc,
  //         this.previousService.selectedPrevious.Infectionsc,
  //         this.previousService.selectedPrevious.Pulmonaryc,
  //         this.previousService.selectedPrevious.Chronic_bc,
  //         this.previousService.selectedPrevious.Chronic_ac
  //       ];
  
  //       if (!checkboxes4.some(checkbox => checkbox)) {
  //         errorMessages.push('At least one checkbox from the new set must be checked!');
  //         isValid = false;
  //       }
  
  //       // Check the previous set of checkboxes
  //       const checkboxes5 = [
  //         this.previousService.selectedPrevious.Seizureoa,
  //         this.previousService.selectedPrevious.Depressionoa,
  //         this.previousService.selectedPrevious.Suicidaloa,
  //         this.previousService.selectedPrevious.Confusionoa,
  //         this.previousService.selectedPrevious.Aggressiveoa,
  //         this.previousService.selectedPrevious.Hallucinationoa,
  //         this.previousService.selectedPrevious.Paranoiaoa,
  //         this.previousService.selectedPrevious.Noneoa
  //       ];
  
  //       if (!checkboxes5.some(checkbox => checkbox)) {
  //         errorMessages.push('At least one checkbox from the previous set must be checked!');
  //         isValid = false;
  //       }
  
  //       // Check the new set of checkboxes
  //       const checkboxes6 = [
  //         this.previousService.selectedPrevious.Seizureor,
  //         this.previousService.selectedPrevious.Depressionor,
  //         this.previousService.selectedPrevious.Suicidalor,
  //         this.previousService.selectedPrevious.Confusionor,
  //         this.previousService.selectedPrevious.Aggressiveor,
  //         this.previousService.selectedPrevious.Hallucinationor,
  //         this.previousService.selectedPrevious.Paranoiaor
  //       ];
  
  //       if (!checkboxes6.some(checkbox => checkbox)) {
  //         errorMessages.push('At least one checkbox from the new set must be checked!');
  //         isValid = false;
  //       }
  //     }
  //   }
  
  //   // Display the alert if there are validation errors
  //   if (!isValid) {
  //     const errorMessage = errorMessages.join('\n');
  //     alert(errorMessage);
  //   }
  
  //   return isValid;
  // }
  






  showAlert(): boolean {
    let isValid = true;
    let errorMessages: string[] = [];
  
    // Check the datebox
    const dateboxValue = this.previousService.selectedPrevious.datebox.trim();
  
    if (dateboxValue === '') {
      errorMessages.push('No number of days entered!');
      isValid = false;
    } else {
      const numberOfDays = parseInt(dateboxValue, 10);
  
      if (Number.isNaN(numberOfDays) || numberOfDays <= 0) {
        errorMessages.push('Invalid number of days!');
        isValid = false;
      } else {
        // Check the first set of checkboxes
        const checkboxes1 = [
          this.previousService.selectedPrevious.Sweatingw,
          this.previousService.selectedPrevious.Palpitationw,
          this.previousService.selectedPrevious.Tremorsw,
          this.previousService.selectedPrevious.Insomniaw,
          this.previousService.selectedPrevious.Fitsw,
          this.previousService.selectedPrevious.Nauseaw,
          this.previousService.selectedPrevious.Achesw,
          this.previousService.selectedPrevious.Anxietyw,
          this.previousService.selectedPrevious.Transientw,
          this.previousService.selectedPrevious.Auditoryw
        ];
  
        if (!checkboxes1.some(checkbox => checkbox)) {
          errorMessages.push('Please select at least one withdrawal symptoms!');
          isValid = false;
        } else {
          // Check the second set of checkboxes
          const checkboxes2 = [
            this.previousService.selectedPrevious.Haematemesisha,
            this.previousService.selectedPrevious.Jaundiceha,
            this.previousService.selectedPrevious.Headha,
            this.previousService.selectedPrevious.Seizureha,
            this.previousService.selectedPrevious.Abscessesha,
            this.previousService.selectedPrevious.Bleedingha,
            this.previousService.selectedPrevious.Skinha,
            this.previousService.selectedPrevious.Nerveha,
            this.previousService.selectedPrevious.Anyha,
            this.previousService.selectedPrevious.Noneha
          ];
  
          if (!checkboxes2.some(checkbox => checkbox)) {
            errorMessages.push('Please select at least one medical problem in the past history.');
            isValid = false;
          } else {
            // Check the third set of checkboxes
            const checkboxes3 = [
              this.previousService.selectedPrevious.Haematemesishr,
              this.previousService.selectedPrevious.Jaundicehr,
              this.previousService.selectedPrevious.Headhr,
              this.previousService.selectedPrevious.Seizurehr,
              this.previousService.selectedPrevious.Abscesseshr,
              this.previousService.selectedPrevious.Bleedinghr,
              this.previousService.selectedPrevious.Skinhr,
              this.previousService.selectedPrevious.Nervehr,
              this.previousService.selectedPrevious.Anyhr
            ];
  
            if (!checkboxes3.some(checkbox => checkbox)) {
              errorMessages.push('Please select at least one medical problem in the present history');
              isValid = false;
            } else {
              // Check the new set of checkboxes
              const checkboxes4 = [
                this.previousService.selectedPrevious.Diabetesc,
                this.previousService.selectedPrevious.Liverc,
                this.previousService.selectedPrevious.Epilepsyc,
                this.previousService.selectedPrevious.Cardiacc,
                this.previousService.selectedPrevious.Infectionsc,
                this.previousService.selectedPrevious.Pulmonaryc,
                this.previousService.selectedPrevious.Chronic_bc,
                this.previousService.selectedPrevious.Chronic_ac
              ];
  
              if (!checkboxes4.some(checkbox => checkbox)) {
                errorMessages.push('Please select at least one chronic health problem');
                isValid = false;
              } else {
                // Check the previous set of checkboxes
                const checkboxes5 = [
                  this.previousService.selectedPrevious.Seizureoa,
                  this.previousService.selectedPrevious.Depressionoa,
                  this.previousService.selectedPrevious.Suicidaloa,
                  this.previousService.selectedPrevious.Confusionoa,
                  this.previousService.selectedPrevious.Aggressiveoa,
                  this.previousService.selectedPrevious.Hallucinationoa,
                  this.previousService.selectedPrevious.Paranoiaoa,
                  this.previousService.selectedPrevious.Noneoa
                ];
  
                if (!checkboxes5.some(checkbox => checkbox)) {
                  errorMessages.push('Please select at least one psychiatric complication in Past section!');
                  isValid = false;
                } else {
                  // Check the new set of checkboxes
                  const checkboxes6 = [
                    this.previousService.selectedPrevious.Seizureor,
                    this.previousService.selectedPrevious.Depressionor,
                    this.previousService.selectedPrevious.Suicidalor,
                    this.previousService.selectedPrevious.Confusionor,
                    this.previousService.selectedPrevious.Aggressiveor,
                    this.previousService.selectedPrevious.Hallucinationor,
                    this.previousService.selectedPrevious.Paranoiaor
                  ];
  
                  if (!checkboxes6.some(checkbox => checkbox)) {
                    errorMessages.push('Please select at least one psychiatric complication in either Present section.');
                    isValid = false;
                  }
                }
              }
            }
          }
        }
      }
    }
  
    // Display the alert if there are validation errors
    if (!isValid) {
      const errorMessage = errorMessages.join('\n');
      alert(errorMessage);
    }
  
    return isValid;
  }
  











  

  // showAlert(){}
  onSubmit(form: NgForm) {
    if(this.showAlert()){
      
      if (form.value._id == "") {
        this.previousService.postPrevious(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshPreviousList();
          M.toast({ html: 'Saved successfully', classes: 'rounded' });
          // this.router.navigate(['individual']);
        });
      }
      else {
        this.previousService.putPrevious(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshPreviousList();
          M.toast({ html: 'Updated successfully', classes: 'rounded' });
        });
      }
    }
    
  }
  
refreshPreviousList() {
  this.previousService.getPreviousList().subscribe((res) => {
    this.previousService.previous = res as Previous[];
  });
}


onEdit(ref:Previous) {
  this.previousService.selectedPrevious=ref;
  }
  onDelete(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.previousService.deletePrevious(_id).subscribe((res) => {
      this.refreshPreviousList();
      this.resetForm(form);
      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
  }

}

