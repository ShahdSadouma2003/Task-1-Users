import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Users } from './user/user';
import { UserService } from './user/user.service';
import { AddNewUserComponent } from './add-new-users/add-new-users';
import { UserDetailsComponent } from './user-details/user-details.component';
import { User } from './user/user.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,Header,Users,AddNewUserComponent,UserDetailsComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private userService = inject(UserService);

  // Signals for state management
  users = this.userService.users;
  selectedUserId = signal<number | null>(null);
  showAddUserForm = signal(false);

  // Computed signal for selected user
  selectedUser = computed(() => {
    return this.users().find(u => u.id === this.selectedUserId()) || null;
  });

  ngOnInit() {
    this.userService.fetchUsers();
  }

  // Select a user to view details
  onSelectUser(id: number) {
    this.selectedUserId.set(id);
  }

  toggleAddUserForm() {
  this.showAddUserForm.update(prev => !prev);
}

  // Show popup when header button clicked
  onHeaderAddUserClicked() {
    this.showAddUserForm.set(true);
  }

  // Handle new user added from form
  onUserAdded(newUser: User) {
    this.userService.addUser(newUser);
    this.showAddUserForm.set(false);
  }
}