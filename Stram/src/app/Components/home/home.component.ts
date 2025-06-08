import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  OnInit,
  AfterViewInit,
  QueryList,
  ViewChildren,
  NgIterable
} from '@angular/core';
import { SingleFilmInfo } from "../../model/SingleFilmInfo";
import { ResultStatusOnly } from "../../model/ResultStatusOnly";
import { HomeService } from "../../services/home.service";
import { film } from "../../model/Film";
import {GeneralTasksService} from "../../services/general-tasks.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent implements OnInit {

  protected sliders: SingleFilmInfo[][] = [];
  firstTitle: String = "Top Film"
  get10: (NgIterable<unknown> & NgIterable<any>) | undefined | null;
  rand = this.gts.getRandomValue(10);


  ngOnInit() {
    this.home.getSliders().subscribe(
      (data: SingleFilmInfo[][]) => {
        console.log(data);
        this.sliders = data;
        this.get10 = data;
      },

      error => {
        console.error('Errore nel recuperare i dati', error);
      }
    );
  }
  constructor(protected home: HomeService, protected gts: GeneralTasksService) {
  }




}
