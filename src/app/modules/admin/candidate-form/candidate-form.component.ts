import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
// import {FormGroup} from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

interface Employee {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  // firstName: any;
  // lastName: any;
  // mail: any;
  // phone: any;
  // interviewer: any;
  // datetime: any;
  // value: string;
  // viewValue: string;
  // position: any;
  // address1: any;
  // address2: any;
  // city: any;
  // state: any;
  // qualification: any;
  // pincode: any;
  // total_experience: any;
  // rel_experience: any;
  // referredByList: any;
  candidateForm: FormGroup

  options = ['java', 'mysql', 'angular', 'kotlin'];
  selectedTechs: string[] = [];
  selectedRefferedby = '';

  constructor(private fb: FormBuilder, private router: Router) { }

  closeDialog() {
    alert("Form submitted successfully");
    this.router.navigate(['main'])
    
  }

  ngOnInit() {

    // this.candidateForm = this.fb.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   mail: ['', Validators.required],
    //   phone: ['', Validators.required],
    //   interviewer:['', Validators.required],
    //   datetime:['', Validators.required],
    //   address1: ['', Validators.required],
    //   address2: [''],
    //   city: ['', Validators.required],
    //   state: ['', Validators.required],
    //   pincode: ['', Validators.required],
    //   position: ['', Validators.required],
    //   refferedBy: [''],
    //   qualification: ['', Validators.required],
    //   total_experience: ['', Validators.required],
    //   rel_experience: ['', Validators.required],

    // });



    this.candidateForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mail: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      interviewer: new FormControl('', Validators.required),
      datetime: new FormControl('', Validators.required),
      address1: new FormControl('', Validators.required),
      address2: new FormControl(''),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pincode: new FormControl('', [Validators.required, Validators.pattern(/^\d{6}$/)]),
      position: new FormControl('', Validators.required),
      refferedBy: new FormControl('', Validators.required),
      qualification: new FormControl('', Validators.required),
      total_experience: new FormControl('', Validators.required),
      rel_experience: new FormControl('', Validators.required),
      selectedTechs: new FormControl('', Validators.required),
      interviewRound: new FormControl('', Validators.required),
      interviewMode: new FormControl('', Validators.required),
    });

  }

  onSubmit() { 
    const formData = this.candidateForm.value;
    
    console.log(formData);
    // Navigate to the EditCandidateComponent and pass the form data as a query parameter
    this.router.navigate(['edit-candidate'], { queryParams: { data: JSON.stringify(formData) } });

  }
}
