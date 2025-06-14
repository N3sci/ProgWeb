import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GuidelinesComponent } from './Components/guidelines/guidelines.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { FilmDetailComponent } from './Components/film-detail/film-detail.component';
import { FilmReviewsComponent } from './Components/film-review/film-review.component';
import { FilmToolbarComponent } from './Components/videogame-toolbar/film-toolbar.component';
import { FilmListsComponent } from './Components/film-lists/film-lists.component';
import { RatingComponent } from './Components/rating/rating.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ReviewToolbarComponent } from './Components/review-toolbar/review-toolbar.component';
import { AddRatingComponent } from './Components/add-rating/add-rating.component';
import { AddReviewComponent } from './Components/add-review/add-review.component';

import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SignupComponent } from './Components/signup/signup.component';
import { AddFilmComponent } from './Components/add-film/add-film.component';
import { CardComponent } from './Components/card/card.component';
import {NgOptimizedImage} from "@angular/common";
import { SliderComponent } from './Components/slider/slider.component';
import { AdminReportsComponent } from './Components/admin-reports/admin-reports.component';
import { ReportToolbarComponent } from './Components/report-toolbar/report-toolbar.component';
import { ToTheTopButtonComponent } from './Components/to-the-top-button/to-the-top-button.component';
import { LoadingSpinnerComponent } from './Components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    GuidelinesComponent,
    HeaderComponent,
    ProfileComponent,
    FilmDetailComponent,
    FilmReviewsComponent,
    FilmToolbarComponent,
    FilmListsComponent,
    RatingComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    ReviewToolbarComponent,
    AddRatingComponent,
    AddReviewComponent,
    SignupComponent,
    AddFilmComponent,
    CardComponent,
    SliderComponent,
    AdminReportsComponent,
    ReportToolbarComponent,
    ToTheTopButtonComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    NgOptimizedImage,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private iconRegistry: MatIconRegistry) {
    iconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }
}
