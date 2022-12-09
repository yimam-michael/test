import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

export interface UserResponse {
  createdAt: string,
  id: number,
  job: string,
  name: string
}

export interface UserListResponse {
  data: User[]
}

export interface NewUser {
  name: string,
  job: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userUrl = "https://reqres.in/api";

  constructor(private httpClient: HttpClient) { }

  addUser(user: NewUser): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(this.userUrl + '/users', user);
  }

  getUsers(): Observable<UserListResponse> {
    console.log('calleeeeed')
    return this.httpClient.get<UserListResponse>(this.userUrl + '/users');
  }
}
