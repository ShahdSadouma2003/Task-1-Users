// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserFullDetailsService {
//   private apiUrl = 'https://jsonplaceholder.typicode.com/users';

//   constructor(private http: HttpClient) {}

//   getAllUsers(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }

//   getUserDetails(userId: number): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/${userId}`);
//   }

//   updateUser(userId: number, updatedUser: any): Observable<any> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.put(`${this.apiUrl}/${userId}`, updatedUser, { headers });
//   }

//   deleteUser(userId: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${userId}`);
//   }
// }

// ....................

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFullDetailsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserDetails(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }
}