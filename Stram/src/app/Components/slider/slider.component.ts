import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {SingleFilmInfo} from "../../model/SingleFilmInfo";
import {film} from "../../model/Film";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  @Input() title!: String;
  @Input() games!: SingleFilmInfo[];

  protected i = 0;

  constructor() {}

  @ViewChild('cardsContainer', { static: false }) cardsContainer!: ElementRef;



  clickBtnArrowSX() {
    this.cardsContainer.nativeElement.scrollLeft -= this.calcWidth();
  }

  clickBtnArrowDX() {
    this.cardsContainer.nativeElement.scrollLeft += this.calcWidth();
  }


  private calcWidth(): number {
    let calc = this.cardsContainer ? this.cardsContainer.nativeElement.clientWidth : 600;
    console.log("------------" + calc);
    return calc;
  }

}
