import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ViewUsersComponent } from './view-users/view-users';
import { UserFullDetailsComponent } from './user-full-details/user-full-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'users', component: ViewUsersComponent },
  { path: 'user/:id', component: UserFullDetailsComponent }
];

// .................

// import { Routes } from '@angular/router';
// import { ViewUsersComponent } from './view-users/view-users';
// import { UserDetailsComponent } from './user-details/user-details.component';

// export const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'users' },
//   { path: 'users', component: ViewUsersComponent },          
//   { path: 'users/:id', component: UserDetailsComponent },     
// ];
