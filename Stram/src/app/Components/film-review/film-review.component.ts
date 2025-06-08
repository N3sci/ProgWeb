import { Component,Input, OnInit } from '@angular/core';
import { review } from '../../model/Review';
import { FilmReviewsService } from '../../services/film-reviews.service';
import { TypeInfo, reviewInfo } from '../../model/ReviewInfo';

@Component({
  selector: 'app-videogame-reviews',
  templateUrl: './film-review.component.html',
  styleUrl: './film-review.component.css'
})
export class FilmReviewsComponent implements OnInit {

  @Input() videogameId : number;

  User = localStorage.getItem("user");

  ReviewList : review[];
  ReviewLikeInfos : reviewInfo[];
  ReviewReportInfos : reviewInfo[];

  constructor(private ReviewService : FilmReviewsService) {}

  ngOnInit(): void {
    this.ReviewService.getReviewListByVideogameId(this.videogameId).subscribe( response =>{
      this.ReviewList=response;
      this.ReviewService.setReviewList(response);
    });

    if(this.User != undefined){
      this.ReviewService.getReviewInfo(this.videogameId,TypeInfo.like).subscribe( response => {
        this.ReviewLikeInfos = response;
      })

      this.ReviewService.getReviewInfo(this.videogameId,TypeInfo.report).subscribe( response => {
        this.ReviewReportInfos = response;
      })
    }
  }

  getSingleReviewInfo(review : review){
    let likeInfo=this.ReviewLikeInfos.find( info => info.mittente == this.User && info.destinatario == review.username) ? true : false;
    let reportInfo=this.ReviewReportInfos.find( info => info.mittente == this.User && info.destinatario == review.username) ? true : false;
    return [likeInfo,reportInfo];
  }

}
