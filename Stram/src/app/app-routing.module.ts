import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';
import { GuidelinesComponent } from './Components/guidelines/guidelines.component';
import { FilmDetailComponent } from './Components/film-detail/film-detail.component';
import { FilmListsComponent} from "./Components/film-lists/film-lists.component";
import {HomeComponent} from "./Components/home/home.component";
import {LoginComponent} from "./Components/login/login.component";
import { NotfoundComponent } from './Components/notfound/notfound.component';
import {SignupComponent} from "./Components/signup/signup.component";
import {AddFilmComponent} from "./Components/add-film/add-film.component";
import { AdminReportsComponent } from './Components/admin-reports/admin-reports.component';
import {adminGuard, authGuard, NoAuthGuard} from './services/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addGame', component: AddFilmComponent, canActivate:[authGuard,adminGuard]},
  {path: 'profile', component:ProfileComponent,canActivate:[authGuard]},
  {path: 'signup', component: SignupComponent, canActivate:[NoAuthGuard]},
  {path: 'login', component: LoginComponent, canActivate:[NoAuthGuard]},
  {path: 'guidelines', component:GuidelinesComponent},
  {path: 'videogame/:id', component:FilmDetailComponent},
  {path: 'videogame-lists', component: FilmListsComponent,canActivate:[authGuard]},
  {path: 'reports-handling', component: AdminReportsComponent,canActivate:[authGuard,adminGuard]},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
