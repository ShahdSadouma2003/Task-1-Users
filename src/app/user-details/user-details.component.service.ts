
// import { Injectable, inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export type UserDetails = {
//   id: number;
//   name: string;
//   email: string;
//   phone?: string;
//   company?: string | { name: string };
//   address?: string | { street: string; city: string };
// };

// @Injectable({ providedIn: 'root' })
// export class UserDetailsService {
//   private http = inject(HttpClient);
//   private baseUrl = 'https://api.example.com/users';

//   getUserById(id: number): Observable<UserDetails> {
//     return this.http.get<UserDetails>(`${this.baseUrl}/${id}`);
//   }
// }
