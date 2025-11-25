// import { Routes } from "@angular/router";
// import { AppComponent } from "./app.component";
// import { Home } from './home/home';
// import { UserFullDetailsComponent } from "./user-full-details/user-full-details";

// export const routes: Routes = [
//   { path: '', component: Home },
//   { path: 'user/:id', component: UserFullDetailsComponent},
// ]

// ........................


import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UserFullDetailsComponent } from './user-full-details/user-full-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'user/:id', component: UserFullDetailsComponent }
];
