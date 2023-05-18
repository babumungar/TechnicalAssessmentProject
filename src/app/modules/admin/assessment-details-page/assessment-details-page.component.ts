import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InterviewService } from 'app/services/interview.service';

@Component({
  selector: 'app-assessment-details-page',
  templateUrl: './assessment-details-page.component.html',
  styleUrls: ['./assessment-details-page.component.scss']
})
export class AssessmentDetailsPageComponent implements OnInit {
  assessmentForm: FormGroup;
  javaRating: any;
  angularRating: any;
  mysqlRating: any;
  reactRating: any;
  selectedStatus: any;
  duration: any;
  overallRating: any;
  interviewCompleted: boolean = false;


  fields = [
    {label: 'Java', name: 'javaRating'},
    {label: 'Angular', name: 'angularRating'},
    {label: 'MySQL', name: 'mysqlRating'},
    {label: 'React', name: 'reactRating'},
    {label: 'Springboot', name: 'springbootRating'},
    {label: 'Node', name: 'nodeRating'}


  ];


  constructor(private interviewService: InterviewService,private fb: FormBuilder, private router: Router) { }

  closeDialog() {
    this.interviewCompleted = true;
    this.interviewService.setInterviewCompleted(true);
    alert("Form submitted successfully");
    this.router.navigate(['main'])
  }
  ngOnInit(): void {
    // this.assessmentForm = this.formBuilder.group({
    //   interviewRound: ['', Validators.required],
    //   interviewMode: ['', Validators.required],
    //   duration: ['', Validators.required],
    //   technologies: ['', Validators.required],
    //   overallRating: [''],
    //   interviewStatus: ['']
    // });
    this.assessmentForm = new FormGroup({

      duration: new FormControl(null, [Validators.required]),
      javaRating: new FormControl(null, [Validators.required]),
      angularRating: new FormControl(null, [Validators.required]),
      mysqlRating: new FormControl(null, [Validators.required]),
      reactRating: new FormControl(null, [Validators.required]),
      springbootRating: new FormControl(null, [Validators.required]),
      nodeRating: new FormControl(null, [Validators.required]),
      overallRating: new FormControl(null, [Validators.required]),
      selectedStatus: new FormControl(null, [Validators.required]),
    });

  }
  onSubmit() { 
    // const formData = this.assessmentForm.value;
    
    // console.log(formData);
    // // Navigate to the EditCandidateComponent and pass the form data as a query parameter
    // this.router.navigate(['main'], { queryParams: { data: JSON.stringify(formData) } });
    // console.log("yes")
    // alert("Form submitted successfully");

    // this.router.navigate(['main'])
  }
 
}
