import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiblingComponent } from './sibling/sibling.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { DetailsComponent } from './details/details.component';
import { PrintComponent } from './print/print.component';
import { FamilyComponent } from './family/family.component';
import { ExperienceComponent } from './experience/experience.component';
import { AdolescenceComponent } from './adolescence/adolescence.component';
import { CommentComponent } from './comment/comment.component';
import { ProblemsComponent } from './problems/problems.component';
import { PatternComponent } from './pattern/pattern.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { Occupation1Component } from './occupation1/occupation1.component';
import { OccupationComponent } from './occupation/occupation.component';
import { Marital2Component } from './marital2/marital2.component';
import { PlanComponent } from './plan/plan.component';
import { ReferralComponent } from './referral/referral.component';
import { CounsellorComponent } from './counsellor/counsellor.component';
import { IndividualComponent } from './individual/individual.component';
import { LegalhistoryComponent } from './legalhistory/legalhistory.component';
import { FinHistoryComponent } from './fin-history/fin-history.component';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { ShistoryComponent } from './shistory/shistory.component';
import { AreComponent } from './are/are.component';
import { ActivityComponent } from './activity/activity.component';
import { PreviousComponent } from './previous/previous.component';
import { MedicalComponent } from './medical/medical.component';

@NgModule({
  declarations: [
    AppComponent,
    SiblingComponent,
    TreatmentComponent,
    DetailsComponent,
    PrintComponent,
    FamilyComponent,
    ExperienceComponent,
    AdolescenceComponent,
    CommentComponent,
    ProblemsComponent,
    PatternComponent,
    InfoComponent,
    LoginComponent,
    Occupation1Component,
    OccupationComponent,
    Marital2Component,
    PlanComponent,
    ReferralComponent,
    IndividualComponent,
    CounsellorComponent,
    LegalhistoryComponent,
    FinHistoryComponent,
    HomeComponent,
    GroupComponent,
    ShistoryComponent,
    AreComponent,
    ActivityComponent,
    PreviousComponent,
    MedicalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
