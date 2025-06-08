import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SingleFilmInfo} from "../model/SingleFilmInfo";
import {ResultStatusOnly} from "../model/ResultStatusOnly";
import {catchError, map, Observable, throwError} from "rxjs";
import {film} from "../model/Film";

class Film {
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/getSliders';


  getSliders(): Observable<SingleFilmInfo[][]> {
    return this.http.post<SingleFilmInfo[][]>(this.apiUrl, {}).pipe(
      map(response => {
        console.log('Response from API:', response);
        return response;
      }),
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(error);
      })
    );
  }

  topGame = { rank: 1, id: 1, name: 'Minecraft', imgUrl: 'assets/images/videogames/0.png', rate: 4, isFavourite: true };


}
