import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Album {
  userId: number,
  id: number,
  title: string
}

export interface AlbumUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: any,
  phone: string,
  website: string,
  company: any,
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  albumUrl = "https://jsonplaceholder.typicode.com";
  constructor(private httpClient: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.albumUrl + '/albums');
  }

  getUsers(): Observable<AlbumUser[]> {
    return this.httpClient.get<AlbumUser[]>(this.albumUrl + '/users');
  }
}
