import {Component, Input} from '@angular/core';
import {SingleFilmInfo} from "../../model/SingleFilmInfo";
import {film} from "../../model/Film";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

    @Input() game!: SingleFilmInfo;
    @Input() rank!: number;
    @Input() link!: String;

    constructor() {
    }



}
