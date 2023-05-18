import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  private interviewCompleted: boolean = false;

  constructor() { }

  getInteviewCompleted(): boolean {
    return this.interviewCompleted;
  }

  setInterviewCompleted(value: boolean): void {
    this.interviewCompleted = value;
  }
}
