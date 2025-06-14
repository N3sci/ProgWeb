import { Component,Input, OnInit } from '@angular/core';
import { tipologiaUser } from '../../model/TipologiaUtente';
import { FilmReviewsService } from '../../services/film-reviews.service';
import { review } from '../../model/Review';
import { FilmDataService } from '../../services/film-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfirmReviewDeleteMessage, SuccessfulReviewDeleteMessage } from '../../model/Message';


@Component({
  selector: 'app-review-toolbar',
  templateUrl: './review-toolbar.component.html',
  styleUrl: './review-toolbar.component.css'
})
export class ReviewToolbarComponent implements OnInit{

  @Input() review:review;
  @Input() reviewInfo : boolean[];

  isLiked:boolean;
  isReported:boolean;

  tipologiaUser = tipologiaUser;
  CurrentUserTipologia = Number(localStorage.getItem("type"));
  User = localStorage.getItem("user");


  constructor(private ReviewService : FilmReviewsService, private  VideogameManagerService : FilmDataService){}

  ngOnInit(): void {
    this.isLiked=this.reviewInfo[0];
    this.isReported=this.reviewInfo[1];
  }

  DeleteReview(){
    if(confirm(ConfirmReviewDeleteMessage)){
      let revIndex=this.ReviewService.SearchUserReview(this.review.username);
      this.ReviewService.DeleteReviewData(this.review).subscribe({
        next: () => {
          this.ReviewService.DeleteFromReviewList(revIndex);
          this.VideogameManagerService.UpdateRating();
          alert(SuccessfulReviewDeleteMessage);
        },
        error: (error : HttpErrorResponse) => {
          alert(error.error);
        }
      });
    }
  }

  ReportReview(){
    //In caso si voglia rendere elimininabile la segnalazione basta rimuovere il disabled con il property binding
    !this.isReported ?
      this.ReviewService.ManageReportToReview(this.review,true).subscribe({
        next: () => {
          this.isReported=!this.isReported;
        },
        error: (error : HttpErrorResponse) => {
          alert(error.error);
        }
      })
      :
      this.ReviewService.ManageReportToReview(this.review,false).subscribe({
        next: () => {
          this.isReported=!this.isReported;
        },
        error: (error : HttpErrorResponse) => {
          alert(error.error);
        }
      });
  }

  LikeReview(){
    !this.isLiked ?
      this.ReviewService.ManageLikeToReview(this.review,true).subscribe({
        next: () => {
          this.review.likes++;
          this.isLiked=!this.isLiked;
        },
        error: (error : HttpErrorResponse) => {
          alert(error.error);
        }
      })
      :
      this.ReviewService.ManageLikeToReview(this.review,false).subscribe({
        next: () => {
          this.review.likes--;
          this.isLiked=!this.isLiked;
        },
        error: (error : HttpErrorResponse) => {
          alert(error.error);
        }
      });
  }
}
