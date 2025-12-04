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
    console.log('mwafy', this.userId)
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

// ...........