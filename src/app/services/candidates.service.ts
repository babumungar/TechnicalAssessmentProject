import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  
  private baseURL = "http://localhost:9090/candidates/";
  constructor(private httpClient: HttpClient) { }

  addCandidate(candidate: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/create`, candidate);
  }

  updateCandidate(candidate: any): Observable<any> {
    return this.httpClient.put<any>(`${this.baseURL}/update`, candidate);
  }

  getCandidatesList(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURL}/${id}`);
  }

  deleteCandidate(candidateId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/deletebyid/${candidateId}`);
  }

  getCandidateById(candidateId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/readbyid/${candidateId}`);
  }
}
