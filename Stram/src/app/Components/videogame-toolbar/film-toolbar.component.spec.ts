import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmToolbarComponent } from './film-toolbar.component';

describe('VideogameToolbarComponent', () => {
  let component: FilmToolbarComponent;
  let fixture: ComponentFixture<FilmToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
