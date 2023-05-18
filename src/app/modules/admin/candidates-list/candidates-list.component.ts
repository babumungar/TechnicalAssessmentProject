import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { InterviewService } from 'app/services/interview.service';

export interface PeriodicElement {
  first_name: string;
  last_name: string;

  id: number;
  mail: string;
  mobile:number;
  interviewer:string;
  date:string;
  time:string;
  interviewStatus:string;
}
export interface DialogDataUserId {
  userObj: any

}
const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, first_name: 'Subhash', last_name: 'mungara', mail: "kumar@gmail.com", mobile: 9848022338, interviewer: "interviewer1", date: "2023-04-28", time: "10:30 AM", 'interviewStatus': "Not Completed" },
  { id: 2, first_name: 'Subhashish', last_name: 'sanjay', mail: "babu@gmail.com", mobile: 9438032919, interviewer: "interviewer1", date: "2023-04-29", time: "2:00 PM", 'interviewStatus': "Not Completed" },
  { id: 3, first_name: 'Trishore', last_name: 'baji', mail: "trishore@gmail.com", mobile: 9848031111, interviewer: "interviewer2", date: "2023-05-01", time: "11:00 AM", 'interviewStatus': "Not Completed" },
  { id: 4, first_name: 'Swamy', last_name: 'sudhabattula', mail: "Steve@gmail.com", mobile: 9848012390, interviewer: "interviewer2", date: "2023-05-02", time: "3:30 PM", 'interviewStatus': "Not Completed" },
  { id: 5, first_name: 'Narendra', last_name: 'medisetti', mail: "Rogers@gmail.com", mobile: 9648032919, interviewer: "interviewer2", date: "2023-05-03", time: "10:00 AM", 'interviewStatus': "Not Completed" },
  { id: 6, first_name: 'steve', last_name: 'rogers', mail: "Tony@gmail.com", mobile: 9148032919, interviewer: "interviewer1", date: "2023-05-04", time: "1:30 PM", 'interviewStatus': "Not Completed" },
  { id: 7, first_name: 'Tony', last_name: 'stark', mail: "Stark@gmail.com", mobile: 9548032919, interviewer: "interviewer2", date: "2023-05-05", time: "4:00 PM", 'interviewStatus': "Not Completed" }
];



@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})

export class CandidatesListComponent implements OnInit {

  interviewerName:string = this.authService.userName;
  

  displayedColumns: string[] = ['id','first_name', 'last_name', 'mail','mobile','interviewer','date', 'time',  'actions', 'report', 'interviewStatus'];

  clickedRows = new Set<PeriodicElement>();
  dataSource: any;

  searchText = '';
  tableData:any=[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private interviewService: InterviewService,public dialog: MatDialog, private router: Router, private authService:AuthService ) { }

  onSubmit() {
    this.filterData(this.searchText);

  }
  ngOnInit(): void {
    // filtering candidates based on interviewer when he logs in
    const interviewCompleted = this.interviewService.getInteviewCompleted();
    console.log("here is "+ localStorage.getItem("userRole"))
    if( localStorage.getItem("userRole") ==='interviewer'){
      console.log()  
      ELEMENT_DATA.forEach(element => {
        if(element.interviewer=== localStorage.getItem("userName")){
          this.tableData.push(element)
        }
      });
      this.dataSource = new MatTableDataSource(this.tableData);

    } else {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
     
    }
    this.dataSource.connect().subscribe(d => {
      //console.log('dataSource length: ', d.length);
      if (d.length === 0) {
        console.log('No candidates found');
      }
    });

    setTimeout(() => this.dataSource.paginator = this.paginator, 0)
    console.log("user loged in : "+this.authService.loggedInUser)

    if (localStorage.getItem("userRole")==='hr') {
      this.displayedColumns.splice(this.displayedColumns.indexOf('report'), 1);

    } else{
      this.displayedColumns.splice(this.displayedColumns.indexOf('actions'), 1);
      this.displayedColumns.splice(this.displayedColumns.indexOf('interviewStatus'), 1);

    }
    
  }

  showCandidate() {
    //console.log("fg")
    this.router.navigate(['show-candidate']);
  }

  reportButton(){
    this.router.navigate(['assessment-details-page']);
  }

  editCandidate() {

    this.router.navigate(['edit-candidate']);

  }

  deleteCandidate(id: number) {
    const index = this.dataSource.data.findIndex((d: PeriodicElement) => d.id === id);
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.dataSource.data);
    }
  }
  
  
  filterData(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
