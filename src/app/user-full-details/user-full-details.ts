import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-full-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-full-details.html',
  styleUrls: ['./user-full-details.css']
})
export class UserFullDetailsComponent implements OnInit {
  user: any;
  loading = true;
  userId: string | null = null;
  isDeleted = false;
  editMode = false;
  userForm!: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.fetchUserData(this.userId);
    }
  }
  
  async fetchUserData(id: string) {
  try {
    this.isDeleted = false; 
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    this.user = await response.json();
    this.initializeForm();
  } catch (error) {
    console.error('Error fetching user:', error);
  } finally {
    this.loading = false;
  }
}

  initializeForm() {
    this.userForm = this.fb.group({
      name: [this.user.name],
      username: [this.user.username],
      email: [this.user.email],
      phone: [this.user.phone],
      website: [this.user.website],
      street: [this.user.address.street],
      city: [this.user.address.city],
      company: [this.user.company.name],
    });
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  async saveChanges() {
    const updatedUser = {
      ...this.user,
      ...this.userForm.value,
      address: {
        ...this.user.address,
        street: this.userForm.value.street,
        city: this.userForm.value.city,
      },
      company: {
        ...this.user.company,
        name: this.userForm.value.company,
      }
    };

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(updatedUser)
      });

      const result = await response.json();
      this.user = result; // update instantly on screen
      this.editMode = false;
      alert('User updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }

  async deleteUser() {
    if (!this.userId) return;
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (!confirmDelete) return;

    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`, { method: 'DELETE' });
      this.isDeleted = true;
      this.user = null;
      alert('User deleted');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
}

// ............................


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { UserService, User } from '../user/user.service';

// @Component({
//   selector: 'app-user-full-details',
//   standalone: true,
//   imports: [],
//   templateUrl: './user-full-details.html',
//   styleUrls: ['./user-full-details.css']
// })
// export class UserFullDetailsComponent implements OnInit {
//   user!: User;
//   loading = true;

//   constructor(private route: ActivatedRoute, private userService: UserService) {}

//   ngOnInit() {
//     // Subscribe to route param changes
//     this.route.paramMap.subscribe(params => {
//       const id = Number(params.get('id'));
//       this.fetchUser(id);
//     });
//   }

//   async fetchUser(id: number) {
//     this.loading = true;
//     this.user = await this.userService.getUserById(id);
//     this.loading = false;
//   }
// }

// ................


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { UserService, User } from '../user/user.service';
// import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-user-full-details',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './user-full-details.html',
//   styleUrls: ['./user-full-details.css']
// })
// export class UserFullDetailsComponent implements OnInit {
//   user!: User;
//   loading = true;
//   editMode = false;
//   userForm!: FormGroup;

//   constructor(
//     private route: ActivatedRoute,
//     private userService: UserService,
//     private fb: FormBuilder
//   ) {}

//   ngOnInit() {
//     this.route.paramMap.subscribe(params => {
//       const id = Number(params.get('id'));
//       this.fetchUser(id);
//     });
//   }

//   async fetchUser(id: number): Promise<void> {
//     try {
//       this.loading = true;
//       this.user = await this.userService.getUserById(id); // Must return Promise<User>
//       this.initForm();
//     } catch (error) {
//       console.error('Error fetching user:', error);
//     } finally {
//       this.loading = false;
//     }
//   }

//   initForm() {
//     this.userForm = this.fb.group({
//       name: [this.user.name],
//       username: [this.user.username],
//       email: [this.user.email],
//       phone: [this.user.phone],
//       website: [this.user.website],
//       street: [this.user.address.street],
//       city: [this.user.address.city],
//       company: [this.user.company.name]
//     });
//   }

//   toggleEdit() {
//     this.editMode = !this.editMode;
//   }

//   async saveChanges(): Promise<void> {
//     const updatedUser: User = {
//       ...this.user,
//       ...this.userForm.value,
//       address: {
//         ...this.user.address,
//         street: this.userForm.value.street,
//         city: this.userForm.value.city
//       },
//       company: {
//         ...this.user.company,
//         name: this.userForm.value.company
//       }
//     };

//     await this.userService.updateUser(updatedUser);
//     this.user = updatedUser;
//     this.toggleEdit();
//   }

//   async deleteUser(): Promise<void> {
//     if (confirm('Are you sure you want to delete this user?')) {
//       await this.userService.deleteUser(this.user.id);
//       alert('User deleted successfully!');
//     }
//   }
// }
