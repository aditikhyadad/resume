import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrl: './group.component.css',
})
export class GroupComponent {
  name1: string = '';
  counsellor1: string = '';
  group1: string = '';
  date1: string = '';
  to1: string = '';
  therapy1: string = '';
  focus1: string = '';
  feeling1: string = '';
  issues1: string = '';
  involvement1: string = '';
  undesirableBehavior1: string = '';

  name2: string = '';
  counsellor2: string = '';
  group2: number | null = null;
  date2: string = '';
  to2: string = '';
  therapy2: string = '';
  focus2: string = '';
  feeling2: string = '';
  issues2: string = '';
  involvement2: string = '';
  undesirableBehavior2: string = '';

  name3: string = '';
  counsellor3: string = '';
  group3: number | null = null;
  date3: string = '';
  to3: string = '';
  therapy3: string = '';
  focus3: string = '';
  feeling3: string = '';
  issues3: string = '';
  involvement3: string = '';
  undesirableBehavior3: string = '';

  name4: string = '';
  counsellor4: string = '';
  group4: number | null = null;
  date4: string = '';
  to4: string = '';
  therapy4: string = '';
  focus4: string = '';
  feeling4: string = '';
  issues4: string = '';
  involvement4: string = '';
  undesirableBehavior4: string = '';

  medicalReasons: string = 'no';
  abusedPrescription: string = 'no';
  getThroughWeek: string = 'no';
  stopUsingDrugs: string = 'no';
  blackouts: string = 'no';
  feelGuilty: string = 'no';
  complain: string = 'no';
  problems: string = 'no';
  lostFriends: string = 'no';
  neglectFamily: string = 'no';
  troubleAtWork: string = 'no';
  lostJob: string = 'no';
  fightsUnderInfluence: string = 'no';
  illegalActivities: string = 'no';
  arrested: string = 'no';
  withdrawalSymptoms: string = 'no';
  medicalProblems: string = 'no';
  helpForProblem: string = 'no';
  treatmentProgram: string = 'no';
  abuseMultipleDrugs: string = 'no';

  validateInputs(): boolean {
    // Define the required fields and their corresponding values
    const requiredFields = [
      { label: 'Name of Patient 1', value: this.name1 },
      { label: 'Counsellor', value: this.counsellor1 },
      { label: 'Group', value: this.group1 },
      { label: 'Date', value: this.date1 },
      { label: 'To', value: this.to1 },
      { label: 'Name of therapist', value: this.therapy1 },
      { label: 'Focus on Topic', value: this.focus1 },
      { label: 'Feeling level sharing', value: this.feeling1 },
      {
        label: 'Openness with which issues were addressed',
        value: this.issues1,
      },
      {
        label: 'Involvement with other group members sharing',
        value: this.involvement1,
      },
      { label: 'Any undesirable behavior', value: this.undesirableBehavior1 },
      { label: 'Name of Patient 2', value: this.name2 },
      { label: 'Counsellor', value: this.counsellor2 },
      { label: 'Group', value: this.group2 },
      { label: 'Date', value: this.date2 },
      { label: 'To', value: this.to2 },
      { label: 'Name of therapist', value: this.therapy2 },
      { label: 'Focus on Topic', value: this.focus2 },
      { label: 'Feeling level sharing', value: this.feeling2 },
      {
        label: 'Openness with which issues were addressed',
        value: this.issues2,
      },
      {
        label: 'Involvement with other group members sharing',
        value: this.involvement2,
      },
      { label: 'Any undesirable behavior', value: this.undesirableBehavior2 },
      { label: 'Name of Patient 3', value: this.name3 },
      { label: 'Counsellor', value: this.counsellor3 },
      { label: 'Group', value: this.group3 },
      { label: 'Date', value: this.date3 },
      { label: 'To', value: this.to3 },
      { label: 'Name of therapist', value: this.therapy3 },
      { label: 'Focus on Topic', value: this.focus3 },
      { label: 'Feeling level sharing', value: this.feeling3 },
      {
        label: 'Openness with which issues were addressed',
        value: this.issues3,
      },
      {
        label: 'Involvement with other group members sharing',
        value: this.involvement3,
      },
      { label: 'Any undesirable behavior', value: this.undesirableBehavior3 },
      { label: 'Name of Patient 4', value: this.name4 },
      { label: 'Counsellor', value: this.counsellor4 },
      { label: 'Group', value: this.group4 },
      { label: 'Date', value: this.date4 },
      { label: 'To', value: this.to4 },
      { label: 'Name of therapist', value: this.therapy4 },
      { label: 'Focus on Topic', value: this.focus4 },
      { label: 'Feeling level sharing', value: this.feeling4 },
      {
        label: 'Openness with which issues were addressed',
        value: this.issues4,
      },
      {
        label: 'Involvement with other group members sharing',
        value: this.involvement4,
      },
      { label: 'Any undesirable behavior', value: this.undesirableBehavior4 },
      {
        label:
          'Have you used drugs other than those required for medical reasons?',
        value: this.medicalReasons,
      },
      {
        label: 'Have you abused prescription drugs?',
        value: this.abusedPrescription,
      },
      {
        label: 'Can you get through the week without using drugs?',
        value: this.getThroughWeek,
      },
      {
        label: 'Are you always able to stop using drugs when you want to?',
        value: this.stopUsingDrugs,
      },
      {
        label:
          'Have you had "Blackouts" or "Flashbacks" as a result of drug use?',
        value: this.blackouts,
      },
      {
        label: 'Do you ever feel bad or guilty about your drug use?',
        value: this.feelGuilty,
      },
      {
        label:
          'Does your spouse even complain about your involvement with drugs?',
        value: this.complain,
      },
      {
        label:
          'Has drug abuse created problems between you and your spouse or your parents?',
        value: this.problems,
      },
      {
        label: 'Have you lost friends because of your use of drugs?',
        value: this.lostFriends,
      },
      {
        label: 'Have you neglected your family because of your use of drugs?',
        value: this.neglectFamily,
      },
      {
        label: 'Have you been in trouble at work because of your use of drugs?',
        value: this.troubleAtWork,
      },
      {
        label: 'Have you lost a job because of drug abuse?',
        value: this.lostJob,
      },
      {
        label: 'Have you gotten into fights when under the influence of drugs?',
        value: this.fightsUnderInfluence,
      },
      {
        label:
          'Have you engaged in illegal activities in order to obtain drugs?',
        value: this.illegalActivities,
      },
      {
        label: 'Have you been arrested for possession of illegal drugs?',
        value: this.arrested,
      },
      {
        label:
          'Have you ever experienced withdrawal symptoms (felt sick) when you stopped taking drugs?',
        value: this.withdrawalSymptoms,
      },
      {
        label:
          'Have you had medical problems as a result of your drug use (e.g. memory loss, hepatitis, convulsions, bleeding, etc.)?',
        value: this.medicalProblems,
      },
      {
        label: 'Have you gone to anyone for help for a drug problem?',
        value: this.helpForProblem,
      },
      {
        label:
          'Have you been involved in a treatment program especially related to drug use?',
        value: this.treatmentProgram,
      },
      {
        label: 'Do you abuse more than one drug at a time?',
        value: this.abuseMultipleDrugs,
      },
    ];

    console.log(requiredFields);
    // Check if any required field is empty
    for (const field of requiredFields) {
      if (!field.value) {
        alert(`Please provide a value for: \n${field.label}`);
        return false;
      }

      // Additional validation for the "Name" field
      if (
        field.label.startsWith('Name') &&
        !/^[a-zA-Z\s]+$/.test(field.value as string)
      ) {
        alert(`Please provide a valid ${field.label} with only letters`);
        return false;
      }
    }

    return true;
  }

  onSubmit(): void {
    if (this.validateInputs()) {
      const body = {
        name1: this.name1,
        counsellor1: this.counsellor1,
        group1: this.group1,
        date1: this.date1,
        to1: this.to1,
        therapy1: this.therapy1,
        focus1: this.focus1,
        feeling1: this.feeling1,
        issues1: this.issues1,
        involvement1: this.involvement1,
        undesirableBehavior1: this.undesirableBehavior1,
        name2: this.name2,
        counsellor2: this.counsellor2,
        group2: this.group2,
        date2: this.date2,
        to2: this.to2,
        therapy2: this.therapy2,
        focus2: this.focus2,
        feeling2: this.feeling2,
        issues2: this.issues2,
        involvement2: this.involvement2,
        undesirableBehavior2: this.undesirableBehavior2,
        name3: this.name3,
        counsellor3: this.counsellor3,
        group3: this.group3,
        date3: this.date3,
        to3: this.to3,
        therapy3: this.therapy3,
        focus3: this.focus3,
        feeling3: this.feeling3,
        issues3: this.issues3,
        involvement3: this.involvement3,
        undesirableBehavior3: this.undesirableBehavior3,
        name4: this.name4,

        counsellor4: this.counsellor4,
        group4: this.group4,
        date4: this.date4,
        to4: this.to4,
        therapy4: this.therapy4,
        focus4: this.focus4,
        feeling4: this.feeling4,
        issues4: this.issues4,
        involvement4: this.involvement4,
        undesirableBehavior4: this.undesirableBehavior4,
        medicalReasons: this.medicalReasons === 'yes',
        abusedPrescription: this.abusedPrescription === 'yes',
        getThroughWeek: this.getThroughWeek === 'yes',
        stopUsingDrugs: this.stopUsingDrugs === 'yes',
        blackouts: this.blackouts === 'yes',
        feelGuilty: this.feelGuilty === 'yes',
        complain: this.complain === 'yes',
        problems: this.problems === 'yes',
        lostFriends: this.lostFriends === 'yes',
        neglectFamily: this.neglectFamily === 'yes',
        troubleAtWork: this.troubleAtWork === 'yes',
        lostJob: this.lostJob === 'yes',
        fightsUnderInfluence: this.fightsUnderInfluence === 'yes',
        illegalActivities: this.illegalActivities === 'yes',
        arrested: this.arrested === 'yes',
        withdrawalSymptoms: this.withdrawalSymptoms === 'yes',
        medicalProblems: this.medicalProblems === 'yes',
        helpForProblem: this.helpForProblem === 'yes',
        treatmentProgram: this.treatmentProgram === 'yes',
        abuseMultipleDrugs: this.abuseMultipleDrugs === 'yes',
      };
      console.table(body);

      axios.post('http://127.0.0.1:3000/group', body).then(() => {
        alert('Form submitted successfully!');
      });
    }
  }
}
