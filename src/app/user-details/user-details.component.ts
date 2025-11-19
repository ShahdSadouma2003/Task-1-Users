// import { Component, Input } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { User } from '../user/user.service';

// @Component({
//   selector: 'app-user-details',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './user-details.component.html',
//   styleUrls: ['./user-details.component.css']
// })
// export class UserDetailsComponent {
//   @Input() user!: User;

//   constructor(private router: Router) {}

//   viewFullDetails() {
//     this.router.navigate(['/user', this.user.id]);
//   }
// }

// ....................

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../user/user.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() user!: User;

  constructor(private router: Router) {}

  viewFullDetails() {
    this.router.navigate(['/user', this.user.id]);
  }
}
