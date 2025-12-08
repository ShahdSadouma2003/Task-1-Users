import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService, User } from '../user/user.service';

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-users.html',
  styleUrls: ['./view-users.css']
})
export class ViewUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.fetchUsers().then(() => {
      this.users = this.userService.users();
    });
  }

  async deleteUser(id: number) {
    await this.userService.deleteUser(id);
    this.users = this.userService.users(); // refresh list
  }

  viewDetails(id: number) {
    this.router.navigate(['/user', id]);
  }
}

// ................

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';

// type User = { id: number; name: string; email: string };

// @Component({
//   standalone: true,
//   selector: 'app-view-users',
//   imports: [CommonModule, RouterLink],
//   templateUrl: './view-users.html',
// })
// export class ViewUsersComponent {
//   // Replace with real API data if needed
//   users: User[] = [
//     { id: 1, name: 'Leanne Graham', email: 'leanne@company.com' },
//     { id: 2, name: 'Ervin Howell',  email: 'ervin@company.com'  },
//     { id: 3, name: 'Clementine',    email: 'clem@company.com'   },
//   ];
// }
