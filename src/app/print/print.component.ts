import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SiblingService } from '../shared/sibling.service';
import { SiblingComponent } from '../sibling/sibling.component';
import { Sibling } from '../shared/sibling.model';
import { DetailsService } from '../shared/details.service';
import { DetailsComponent } from '../details/details.component';
import { Details } from '../shared/details.model';
import { Treatment } from '../shared/treatment.model';
import { TreatmentService } from '../shared/treatment.service';
import { TreatmentComponent } from '../treatment/treatment.component';
import { Experience } from '../shared/experience.model';
import { ExperienceService } from '../shared/experience.service';
import { ExperienceComponent } from '../experience/experience.component';
import { AdolescenceService } from '../shared/adolescence.service';
import { Adolescence } from '../shared/adolescence.model';
import { Problems } from '../shared/problems.model';
import { ProblemsService } from '../shared/problems.service';
import { Pattern } from '../shared/pattern.model';
import { PatternService } from '../shared/pattern.service';
import { PatientService } from '../shared/patient.service';
import { Patient } from '../shared/patient.model';
import { Marital2Component } from '../marital2/marital2.component';
import { Marital2Service } from '../shared/marital2.service';
import { Marital2 } from '../shared/marital2.model';
import { Referral } from '../shared/referral.model';
import { ReferralService } from '../shared/referral.service';
import { Individual } from '../shared/individual.model';
import { IndividualService } from '../shared/individual.service';
import { Plan } from '../shared/plan.model';
import { PlanService } from '../shared/plan.service';
import { Counsellor } from '../shared/counsellor.model';
import { CounsellorService } from '../shared/counsellor.service';
import { Occupation } from '../shared/occupation.model';
import { OccupationService } from '../shared/occupation.service';
import { Occupation1 } from '../shared/occupation1.model';
import { Occupation1Service } from '../shared/occupation1.service';
import { FinHistory} from '../shared/fin-history.model';
import {  FinHistoryService} from '../shared/fin-history.service';
import { LegalhistoryService } from '../shared/legalhistory.service';
import { Legalhistory} from '../shared/legalhistory.model';
import { Activity } from '../shared/activity.model';
import { ActivityService } from '../shared/activity.service';
import { Are } from '../shared/are.model';
import { AreService } from '../shared/are.service';
import { MedicalService } from '../shared/medical.service';
import { Medical } from '../shared/medical.model';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrl: './print.component.css',
  providers: [SiblingService],
})
export class PrintComponent {
  sib:Sibling[] = [];
  adolss: Adolescence[]=[];
  adolservice: any;
  expservice:any;
  exp:Experience[]=[];
  occ:Occupation[]=[];
  occservice:any;
  occ1:Occupation1[]=[];
  occservice1:any;
  activities: Activity[] = [];
  ares: Are[] = [];

  constructor(public siblingService: SiblingService,public medicalService:MedicalService,public occs1: Occupation1Service,public legalhistoryService: LegalhistoryService,public finhistoryService: FinHistoryService,public occs: OccupationService,public referralService: ReferralService,public counsellorService: CounsellorService,public planService: PlanService,public individualService: IndividualService,public marital2Service: Marital2Service, public detailsService: DetailsService ,public treatmentService:TreatmentService, public expp:ExperienceService,public adols:AdolescenceService, public problemsService: ProblemsService, public patternService: PatternService,public patientService:PatientService,public activityService : ActivityService,public areService : AreService ) { 
    this.adolservice=adols;
    this.expservice=expp;
    this.occservice=occs;
    this.occservice1=occs1;
    
  }

  // In your component
ngOnInit() {
  this.getAdolData();
  this.getexpData();
  this.getOccData();
  this.getOcc1Data();
  this.siblingService.getSiblingList().subscribe((res) => {
    this.siblingService.sibling = res as Sibling[];
  });

  this.detailsService.getDetailsList().subscribe((res) => {
    this.detailsService.details = res as Details[];
  });

  this.treatmentService.getTreatmentList().subscribe((res)=>{
    this.treatmentService.Treatment = res as Treatment[];
  });
  this.problemsService.getProblemsList().subscribe((res) => {
    this.problemsService.problems = res as Problems[];
  });
  this.patternService.getPatternList().subscribe((res) => {
    console.log(this.patternService.pattern)
    this.patternService.pattern = res as Pattern[];
  });
  this.patientService.getPatientList().subscribe((res) => {
    console.log(this.patientService.Patient)
    this.patientService.Patient = res as Patient[];
  });
  this.legalhistoryService.getLegalhistoryList().subscribe((res) => {
    console.log(this.legalhistoryService.Legalhistory)
    this.legalhistoryService.Legalhistory = res as Legalhistory[];
  });
  this.activityService.getActivities().subscribe((res)=>{
    console.log(this.activityService.activities)
    this.activityService.activities = res as Activity[];
  });
  this.areService.getAres().subscribe((res) =>{
    console.log(this.areService.ares)
    this.areService.ares = res as Are[];
  });





  this.finhistoryService.getFinHistoryList().subscribe((res) => {
    console.log(this.finhistoryService.FinHistory)
    this.finhistoryService.FinHistory = res as FinHistory[];
  });

  this.marital2Service.getMarital2List().subscribe((res)=>{
    this.marital2Service.marital2 = res as Marital2[];
   
  });


  this.referralService.getReferralList().subscribe((res)=>{
    console.log(this.referralService.referrals)
    this.referralService.referrals=res as Referral[];
  })
  this.individualService.getIndividualList().subscribe((res)=>{
    console.log(this.individualService.individuals)
    this.individualService.individuals=res as Individual[];
  })
  this.counsellorService.getCounsellorList().subscribe((res)=>{
    console.log(this.counsellorService.counsellor)
    this.counsellorService.counsellor=res as Counsellor[];
  })
  this.planService.getPlanList().subscribe((res)=>{
    console.log(this.planService.plan)
    this.planService.plan=res as Plan[];
  })
  this.medicalService.getMedicalList().subscribe((res)=>{
    console.log(this.medicalService.medicals)
    this.medicalService.medicals=res as Medical[];
  })
  console.log('Sibling Data in ngOnInit:',  this.referralService.referrals);
}

getAdolData() {
  this.adolservice.getAdol().subscribe(
    (data: Adolescence[]) => {
      this.adolss = data;
      console.log(this.adolss);
    },
    (error: any) => {
      console.error('Error in getAdolData:', error);
    });



}
getOccData() {
  this.occservice.getOcc().subscribe(
    (data: Occupation[]) => {
      this.occ = data;
      console.log(this.occ)
    },
    (error:any) => {
      console.error('Error in getAdolData:', error);
    }
  );
}
getOcc1Data() {
  this.occservice1.getOcc1().subscribe(
    (data: Occupation1[]) => {
      this.occ1 = data;
      console.log(this.occ1)
    },
    (error:any) => {
      console.error('Error in getAdolData:', error);
    }
  );
}
getexpData() {
  this.expservice.getexp().subscribe(
    (data: Experience[]) => {
      this.exp = data;
      console.log(this.exp)
    },
    (error:any) => {
      console.error('Error in getAdolData:', error);
    }
  );
}

onSubmit(form: NgForm) {
  window.print();
}
}
