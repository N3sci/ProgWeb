import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListsComponent } from './film-lists.component';

describe('VideogameListsComponent', () => {
  let component: FilmListsComponent;
  let fixture: ComponentFixture<FilmListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
