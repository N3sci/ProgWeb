import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmReviewsComponent } from './film-review.component';

describe('VideogameReviewsComponent', () => {
  let component: FilmReviewsComponent;
  let fixture: ComponentFixture<FilmReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
