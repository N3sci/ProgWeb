import { HttpClient } from '@angular/common/http';
import { film } from '../model/Film';
import { Injectable } from '@angular/core';
import { FilmReviewsService } from './film-reviews.service';

@Injectable({
  providedIn: 'root'
})

export class FilmDataService {

  BackEndURL="http://localhost:8080/api";
  selectedVideogame: film;
  isEditable = false;

  constructor(private http : HttpClient, private ReviewService : FilmReviewsService){ }

  isEditMode(){
    return this.isEditable;
  }

  toggleEditMode(){
    this.isEditable=!this.isEditable;
  }

  UpdateRating(){
    this.selectedVideogame.valutazione=this.ReviewService.getNewAverageVoto();
  }

  GetSelectedVideogame(){
    return this.selectedVideogame;
  }

  SetSelectedVideogame(videogame : film){
    this.selectedVideogame=videogame;
  }

  GetVideogameDetails(id: number){
    return this.http.get<film>(this.BackEndURL+"/Videogame/"+id);
    //get videogame from backEnd
  }

  RemoveVideogameData(id : number){
    return this.http.delete(this.BackEndURL+"/DeleteVideogame/"+id);
    //alert backEnd to remove videogame
  }

  EditVideogameDetails(id : number){
    return this.http.put(this.BackEndURL+"/EditVideogame/"+id,this.selectedVideogame);
    //send data edited to backEnd
  }

}
