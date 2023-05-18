import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../candidates-list/candidates-list.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-interviewer-page',
  templateUrl: './interviewer-page.component.html',
  styleUrls: ['./interviewer-page.component.scss']
})
export class InterviewerPageComponent implements OnInit {
  

  candidates: any[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@email.com',
      phone: '123-456-7890',
      interviewTime: 'April 30, 2023 10:00 AM'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@email.com',
      phone: '123-456-7890',
      interviewTime: 'April 30, 2023 11:00 AM'
    },
  ];

  // candidates = new MatTableDataSource<any>(CANDIDATES);
  displayedColumns: string[] = ['name', 'email', 'phone', 'interviewTime'];
  constructor() { }

  ngOnInit(): void {
  }



}
