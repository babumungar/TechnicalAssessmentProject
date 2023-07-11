import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private baseURL = "http://localhost:9090/rating/";
  constructor(private httpClient: HttpClient) { }

   // addSkillRating(): Observable<> {
  //   return this.http.post<>(`${this.baseURL}/create`,);
  // }

  createRating(rating: any, ratingId: number, skillRating: number, candidateId: number, skillId: number): Observable<Object> {
    const url = `${this.baseURL}/create/${ratingId}/${skillRating}/${candidateId}/${skillId}`;
    return this.httpClient.post<any>(url, rating);
  }
}
