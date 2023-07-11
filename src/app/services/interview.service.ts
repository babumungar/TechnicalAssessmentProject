import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  private interviewCompleted: boolean = false;

  private baseURL = "http://localhost:9090/interview/";
  constructor(private httpClient: HttpClient) { }

  // getInteviewCompleted(): boolean {
  //   return this.interviewCompleted;
  // }

  // setInterviewCompleted(value: boolean): void {
  //   this.interviewCompleted = value;
  // }
  addInterviewDetails(interviewDto: any): Observable<any> {
    const url = `${this.baseURL}/create`;
    return this.httpClient.post<any>(url, interviewDto);
  }
}
