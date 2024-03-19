import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from '../details/details.component'
import { SiblingComponent } from '../sibling/sibling.component'
import { TreatmentComponent } from '../treatment/treatment.component'
import { CommentComponent } from '../comment/comment.component'
import { ProblemsComponent } from '../problems/problems.component'
import { PatternComponent } from '../pattern/pattern.component';

declare var M: any;

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrl: './family.component.css',
  
})
export class FamilyComponent implements OnInit{

  ngOnInit() {
    M.AutoInit();
  }
}
