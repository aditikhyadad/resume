import { Component } from '@angular/core';
import { CommentService } from '../shared/comment.service';
import { NgForm } from '@angular/forms';


import { Comment } from '../shared/comment.model';
declare var M: any;
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
  providers : [CommentService]
})
export class CommentComponent {

  constructor(public commentService: CommentService) { }



  
  ngOnInit() {
    this.resetForm();
    this.refreshCommentList();
    M.AutoInit();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.commentService.selectedComment = {
      _id: "",
      mild: "",
      moderate: "",
      severe: ""
    }
    M.AutoInit();
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.commentService.postComment(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCommentList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
        // this.router.navigate(['family'])
      });
    }
    else {
      this.commentService.putComment(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCommentList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshCommentList() {
    this.commentService.getCommentList().subscribe((res) => {
      this.commentService.Comment = res as Comment[];
    });
  }

  onEdit(sib: Comment) {
    this.commentService.selectedComment = sib;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.commentService.deleteComment(_id).subscribe((res) => {
        this.refreshCommentList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
