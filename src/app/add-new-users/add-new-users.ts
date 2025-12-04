// import { Component, EventEmitter, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-add-new-user',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './add-new-users.html',
//   styleUrls: ['./add-new-users.css']
// })
// export class AddNewUserComponent {
//   @Output() userAdded = new EventEmitter<any>();
//   userForm: FormGroup;
//   showPopup = false;

//   constructor(private fb: FormBuilder) {
//     this.userForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]]
//     });
//   }

//   openPopup() {
//     this.showPopup = true;
//   }

//   closePopup() {
//     this.showPopup = false;
//   }

//   onSubmit() {
//     if (this.userForm.invalid) return;

//     const newUser = {
//       id: Date.now(),
//       ...this.userForm.value
//     };

//     this.userAdded.emit(newUser);
//     this.userForm.reset();
//     this.closePopup();
//   }
// }

// ........................................

// import { Component, EventEmitter, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-add-new-user',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './add-new-users.html',
//   styleUrls: ['./add-new-users.css']
// })
// export class AddNewUserComponent {
//   @Output() userAdded = new EventEmitter<any>();
//   @Output() cancel = new EventEmitter<void>();

//   userForm: FormGroup;
//   showPopup = true; // Always true when component is rendered in modal

//   constructor(private fb: FormBuilder) {
//     this.userForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       address: ['']
//     });
//   }

//   onSubmit() {
//     if (this.userForm.invalid) return;

//     const newUser = {
//       id: Date.now(),
//       ...this.userForm.value
//     };

//     this.userAdded.emit(newUser);
//     this.userForm.reset();
//   }

//   onCancel() {
//     this.cancel.emit();
//   }
// }

// ..............................

// import { Component, EventEmitter, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-add-new-user',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './add-new-users.html',
//   styleUrls: ['./add-new-users.css']
// })
// export class AddNewUserComponent {
//   @Output() userAdded = new EventEmitter<any>();
//   @Output() cancel = new EventEmitter<void>();

//   userForm: FormGroup;
//   showPopup = true; 

//   constructor(private fb: FormBuilder) {
//     this.userForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       address: ['']
//     });
//   }

//   onSubmit() {
//     if (this.userForm.invalid) return;

//     const newUser = {
//       id: Date.now(),
//       ...this.userForm.value
//     };

//     this.userAdded.emit(newUser);
//     this.userForm.reset();
//   }

//   onCancel() {
//     this.cancel.emit(); // Notify parent to close modal
//   }
// }

import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-new-users.html',
  styleUrls: ['./add-new-users.css']
})
export class AddNewUserComponent {
  @Output() userAdded = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  userForm: FormGroup;
  showPopup = true;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      company: ['']
    });
  }

  async onSubmit() {
    if (this.userForm.invalid) return;

    const newUser = {
      ...this.userForm.value
    };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });

      const savedUser = await response.json();
      this.userAdded.emit(savedUser); // Emit saved user with backend ID
      this.userForm.reset();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}