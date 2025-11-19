import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { User } from './user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterLink, NgFor, RouterModule],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class Users {
  selectedUser!: User;
  showModal = false;

  @Input() users: any[] = [];

  @Input() user!: User;
  @Input() selected = false;
  @Output() select = new EventEmitter<number>();
  
  constructor(private router: Router) {}

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
  
  viewFullDetails() {
    this.router.navigate(['/user', this.user.id]);
  }
  
  closeModal() {
    this.showModal = false;
  }

}

// .....................................................
