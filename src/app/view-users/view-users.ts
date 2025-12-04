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