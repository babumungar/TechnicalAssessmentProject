import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  private baseURL = "http://localhost:9090/assessment/";
  constructor(private httpClient: HttpClient) { }
}
