import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-candidate',
  templateUrl: './show-candidate.component.html',
  styleUrls: ['./show-candidate.component.scss']
})
export class ShowCandidateComponent implements OnInit {
dataSource: any;
COLUMNS: any;
techs = [
  { name: 'Java', rating: 4 },
  { name: 'Angular', rating: 3 },
  { name: 'MySQL', rating: 4 },
  { name: 'React', rating: 3 }
];
  constructor() { }

  ngOnInit(): void {
  }

}
