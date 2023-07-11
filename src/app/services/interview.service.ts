import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  private interviewCompleted: boolean = false;

  private baseURL = "http://localhost:9090/interview/";
  constructor(private httpClient: HttpClient) { }

  getInteviewCompleted(): boolean {
    return this.interviewCompleted;
  }

  setInterviewCompleted(value: boolean): void {
    this.interviewCompleted = value;
  }
}
