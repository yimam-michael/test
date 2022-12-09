import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatFactInterface } from '../app.component';
import { Observable } from 'rxjs';

export interface CatFactResponse {
  current_page?: number,
  data: CatFactInterface[],
}

export interface CatBreed {
  breed: string,
  country: string,
  origin: string,
  coat: string,
  pattern: string
}

export interface CatBreedResponse {
  data: CatBreed[]
}

@Injectable({
  providedIn: 'root'
})
export class CatFactService {

  catFactUrl = "https://catfact.ninja";

  constructor(private http: HttpClient) { }

  getCatFacts(): Observable<CatFactInterface> {
    return this.http.get<CatFactInterface>(this.catFactUrl + '/fact');
  }

  getCatFactsList(): Observable<CatFactResponse> {
    return this.http.get<CatFactResponse>(this.catFactUrl + '/facts');
  }

  getBreeds(): Observable<CatBreedResponse> {
    return this.http.get<CatBreedResponse>(this.catFactUrl + "/breeds");
  }
}
