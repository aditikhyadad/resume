import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintComponent } from './print/print.component';
import { FamilyComponent } from './family/family.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { HomeComponent } from './home/home.component';
import { ShistoryComponent } from './shistory/shistory.component';
import { GroupComponent } from './group/group.component';
import { AreComponent } from './are/are.component';
import { ActivityComponent } from './activity/activity.component';
import { MedicalComponent } from './medical/medical.component';
import { CounsellorComponent } from './counsellor/counsellor.component';
import { IndividualComponent } from './individual/individual.component';
import { PlanComponent } from './plan/plan.component';
import { ReferralComponent } from './referral/referral.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'print', component: PrintComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'info', component: InfoComponent },
  { path: 'treatment', component: TreatmentComponent },
  {path:'medical',component:MedicalComponent},
  { path: 'home', component: HomeComponent },
  { path: 'shistory', component: ShistoryComponent },
  { path: 'group', component: GroupComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'are', component:AreComponent},
  {path:'individual',component:IndividualComponent},
  {path:'counsellor',component:CounsellorComponent},
  {path:'referral',component:ReferralComponent},
  {path:'plan',component:PlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
