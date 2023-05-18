import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  private baseURL = "http://localhost:9090/candidates/";
  constructor(private httpClient: HttpClient) { }

  // addCandidate(): Observable<> {
  //   return this.http.post<>(`${this.baseURL}/create`,);
  // }

  // updateCandidate(): Observable<Object> {
  //   return this.httpClient.put();
  // }

  // getCandidatesList(id: number): Observable<Candidate[]> {
  //   return this.httpClient.get<Candidate[]>(`${this.baseURL}/${id}`);
  // }

  // deleteCandidate(houseId: number): Observable<any> {
  //   return this.httpClient.delete(`${this.baseURL}/deletebyid/${houseId}`);
  // }

  // getCandidateById(HouseId: number): Observable<> {
  //   return this.httpClient.get<>(`${this.baseURL}/readbyid/${HouseId}`);
  // }
}
