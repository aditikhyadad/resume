import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-shistory',
  templateUrl: './shistory.component.html',
  styleUrl: './shistory.component.css',
})
export class ShistoryComponent {
  age: string = '';
  sustained: string = '';
  eachOther: string = '';
  living: string = '';
  Children: string = '';
  textChildren: string = '';
  highRisk: string = '';
  used: string = '';
  condoms: string = '';
  casual: string = '';
  tested: string = '';
  positiveornegative: string = '';
  reveal: string = '';
  reports: string = '';
  notApplicable: string = '';
  sexualproblem: string = '';
  ReducedLibido: string = '';
  Impotency: string = '';
  sexualurge: string = '';
  Completeabstinence: string = '';
  Anyother: string = '';

  constructor(private router: Router) {}

  validateInputs(): boolean {
    const rows = [
      { label: 'a. Age of partner', radios: [this.age] },
      { label: 'b. Is it a sustained relationship', radios: [this.sustained] },
      {
        label: 'c. For how many years have you known each other',
        radios: [this.eachOther],
      },
      { label: 'd. What is the living arrangement', radios: [this.living] },
      {
        label: 'e. Any children:',
        radios: [this.Children],
        details: this.textChildren,
      },
      {
        label: '2. Have you been involved in any high-risk sexual activities?',
        radios: [this.highRisk],
      },
      {
        label: 'Sex with commercial sex workers if yes,did you use condoms',
        radios: [this.used],
      },
      { label: '3. Sex with casual acquaintance', radios: [this.casual] },
      { label: '4. Have you been tested for HIV', radios: [this.tested] },
      {
        label: '5. At present do you have any sexual problems ?',
        radios: [this.sexualproblem],
      },
    ];

    // Loop for '3. Sex with casual acquaintance'
    const casualRows = [
      { label: 'if yes, did you use condoms', radios: [this.condoms] },
    ];

    // Loop for '4. Have you been tested for HIV'
    const testedRows = [
      {
        label: 'If yes, a. Positive/Negative',
        radios: [this.positiveornegative],
      },
      { label: 'b. Not willing to reveal', radios: [this.reveal] },
      { label: 'c. Not collected reports', radios: [this.reports] },
      { label: 'd. Not Applicable = NA', radios: [this.notApplicable] },
    ];

    // Loop for '5. At present do you have any sexual problems ?'
    const sexualProblemRows = [
      { label: 'If yes, a. Reduced Libido', radios: [this.ReducedLibido] },
      { label: 'b. Impotency', radios: [this.Impotency] },
      { label: 'c. Excessive sexual urge', radios: [this.sexualurge] },
      { label: 'd. Complete abstinence', radios: [this.Completeabstinence] },
      { label: 'e. Any other', radios: [this.Anyother] },
    ];

    // Validate '3. Sex with casual acquaintance'
    for (const row of rows) {
      if (row.label === '3. Sex with casual acquaintance') {
        const checkedRadioCount = row.radios.filter((radio) => radio).length;
        if (checkedRadioCount === 1 && this.casual === 'yes') {
          for (const casualRow of casualRows) {
            const casualCheckedRadioCount = casualRow.radios.filter(
              (radio) => radio
            ).length;
            if (casualCheckedRadioCount !== 1) {
              alert(
                `Please select one option for the row: \n${casualRow.label}`
              );
              return false;
            }
          }
        }
      }
    }

    // Validate '4. Have you been tested for HIV'
    for (const row of rows) {
      if (row.label === '4. Have you been tested for HIV') {
        const checkedRadioCount = row.radios.filter((radio) => radio).length;
        if (checkedRadioCount === 1 && this.tested === 'yes') {
          for (const testedRow of testedRows) {
            const testedCheckedRadioCount = testedRow.radios.filter(
              (radio) => radio
            ).length;
            if (testedCheckedRadioCount !== 1) {
              alert(
                `Please select one option for the row: \n${testedRow.label}`
              );
              return false;
            }
          }
        }
      }
    }

    // Validate '5. At present do you have any sexual problems ?'
    for (const row of rows) {
      if (row.label === '5. At present do you have any sexual problems ?') {
        const checkedRadioCount = row.radios.filter((radio) => radio).length;
        if (checkedRadioCount === 1 && this.sexualproblem === 'yes') {
          for (const sexualProblemRow of sexualProblemRows) {
            const sexualProblemCheckedRadioCount =
              sexualProblemRow.radios.filter((radio) => radio).length;
            if (sexualProblemCheckedRadioCount !== 1) {
              alert(
                `Please select one option for the row: \n${sexualProblemRow.label}`
              );
              return false;
            }
          }
        }
      }
    }

    for (const row of rows) {
      const checkedRadioCount = row.radios.filter((radio) => radio).length;

      if (checkedRadioCount !== 1) {
        alert(`Please select one option for the row: \n${row.label}`);
        return false;
      }

      // If "Yes" is chosen for "Any children", check that "If yes, details" is not empty
      if (
        row.label === 'e. Any children:' &&
        row.radios[0] === 'yes' &&
        !row.details?.trim()
      ) {
        alert(
          `Please provide details for "If yes, details" in the row: \n${row.label}`
        );
        return false;
      }

      if (
        row.label === 'e. Any children:' &&
        row.radios[0] === 'no' &&
        row.details?.trim()
      ) {
        alert(
          `Please leave "If yes, details" empty since "No" is chosen in the row: \n${row.label}`
        );
        return false;
      }
    }

    console.log(rows);
    console.log(casualRows);
    console.log(testedRows);
    console.log(sexualProblemRows);

    return true;
  }

  onSubmit(): void {
    // if (this.validateInputs()) {
    const body = {
      ageOfPartner: this.age,
      sustainableRelationShip: this.sustained,
      yearsKnown: this.eachOther,
      livingArrangement: this.living,
      anyChildren: this.Children === 'yes',
      childrenDetails: this.textChildren,
      highRiskSexualActivity: this.highRisk === 'yes',
      condomUseWithCommercialWorker: this.used,
      sexCasualAcquaintance: this.casual === 'yes',
      condomUseCasualAcquaintance: this.condoms,
      haveYouTestedHIV: this.tested === 'yes',
      hIVStatus: this.positiveornegative,
      notWillingToReveal: this.reveal === 'yes',
      notCollectedReports: this.reports === 'yes',
      notApplicable: this.notApplicable === 'yes',
      sexualProblemStatus: this.sexualproblem === 'yes',
      reducedLibido: this.ReducedLibido === 'yes',
      impotency: this.Impotency === 'yes',
      excessiveSexualUrge: this.sexualurge === 'yes',
      completeAbstinence: this.Completeabstinence === 'yes',
      anyOther: this.Anyother === 'yes',
    };
    console.log(body);

    axios.post('http://localhost:3000/shistory', body).then((res) => {
      console.log(res);
      alert('Form submitted successfully');
    });
    //this.router.navigate(['/group']); // Assuming 'group' is the route path for your GroupComponent
    // }
  }
}
