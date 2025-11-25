// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { UserService } from '../user/user.service';
// import { Users } from '../user/user';

// @Component({
//   selector: 'app-view-users',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './view-users.html',
//   styleUrls: ['./view-users.css']
// })
// export class ViewUsersComponent {
// }

// ..........................


// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router, RouterModule } from '@angular/router';
// import { UserService, User } from '../user/user.service';

// @Component({
//   selector: 'app-view-users',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './view-users.html',
//   styleUrls: ['./view-users.css'] 
// })
// export class ViewUsersComponent implements OnInit {
//   users: User[] = [];

//   constructor(private userService: UserService, private router: Router) {}

//   async ngOnInit() {
//     await this.userService.fetchUsers(); 
//     this.users = this.userService.users(); 
//   }

//   async deleteUser(id: number) {
//     await this.userService.deleteUser(id); 
//     this.users = this.userService.users(); 
//   }

//   viewDetails(id: number) {
//     this.router.navigate(['/user', id]); 
//   }
// }

// .....................


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService, User } from '../user/user.service';

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-users.html',
  styleUrls: ['./view-users.css']
})
export class ViewUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  async ngOnInit() {
    await this.userService.fetchUsers();
    this.users = this.userService.users();
  }

  async deleteUser(id: number): Promise<void> {
    await this.userService.deleteUser(id); // ✅ Service returns Promise<void>
    this.users = this.userService.users(); // ✅ Refresh list
  }

  viewDetails(id: number): void {
    this.router.navigate(['/user', id]); // ✅ Navigate to details page
  }
}
