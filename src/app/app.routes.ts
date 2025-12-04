// import { Routes } from '@angular/router';
// import { Home } from './home/home';
// import { UserFullDetailsComponent } from './user-full-details/user-full-details';
// import { Users } from './user/user';

// export const routes: Routes = [
//   { path: '', component: Home },
//   { path: 'user/:id', component: UserFullDetailsComponent }
// ]

// ............................

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ViewUsersComponent } from './view-users/view-users';
import { UserFullDetailsComponent } from './user-full-details/user-full-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'users', component: ViewUsersComponent },
  { path: 'user/:id', component: UserFullDetailsComponent },
  // { path: '**', redirectTo: '' } // optional fallback
];
