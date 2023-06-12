import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Employee {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.scss']
})
export class EditCandidateComponent implements OnInit {
  editCandidate: FormGroup;
  form: any;
  editCandidateForm: FormGroup

  options = ['java', 'mysql', 'angular', 'kotlin'];
  selectedTechs: string[] = [];

  selected = 'option2';

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute ) {}

  closeDialog() {
    alert("Form submitted successfully");
    this.router.navigate(['main'])
  }

  ngOnInit() {

    // this.editCandidateForm = new FormGroup({
    //   firstName: new FormControl('Steve', Validators.required),
    //   lastName: new FormControl('Rogers', Validators.required),
    //   mail: new FormControl('steve@gmail.com', [Validators.required, Validators.email]),
    //   phone: new FormControl('789456133', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    //   interviewer: new FormControl('sk', Validators.required),
    //   datetime: new FormControl(new Date(), Validators.required),
    //   address1: new FormControl('4, Rajiv Gandhi Salai, Taramani, Chennai, Tamil Nadu 600 113, India', Validators.required),
    //   address2: new FormControl('4, Rajiv Gandhi Salai, Taramani, Chennai, Tamil Nadu 600 113, India'),
    //   city: new FormControl('chennai', Validators.required),
    //   state: new FormControl('Tamilnadu', Validators.required),
    //   pincode: new FormControl('690078', [Validators.required, Validators.pattern(/^\d{6}$/)]),
    //   position: new FormControl('developer', Validators.required),
    //   refferedBy: new FormControl('', Validators.required),
    //   qualification: new FormControl('B.Tech', Validators.required),
    //   total_experience: new FormControl('5y', Validators.required),
    //   rel_experience: new FormControl('3y', Validators.required),
    //   selectedTechs: new FormControl(['java', 'mysql', 'angular']),
    //   interviewRound: new FormControl('', Validators.required),
    //   interviewMode: new FormControl('', Validators.required),

    // });
     // Retrieve the form data from the query parameter
     //const formData = JSON.parse(this.route.snapshot.queryParamMap.get('data'));
     
     this.editCandidateForm = new FormGroup({
       firstName: new FormControl('Subhash', Validators.required),
       lastName: new FormControl('Mungara', Validators.required),
       mail: new FormControl('babu@gmail.com', [Validators.required, Validators.email]),
       phone: new FormControl('7894561230', [Validators.required, Validators.pattern(/^\d{10}$/)]),
       interviewer: new FormControl('interviewer1', Validators.required),
       datetime: new FormControl('2023-05-11T10:00', Validators.required),
       address1: new FormControl('TIDEL Park Ltd. No.4, Rajiv Gandhi Salai, Taramani,. Chennai - 600 113', Validators.required),
       address2: new FormControl('TIDEL Park Ltd. No.4, Rajiv Gandhi Salai, Taramani,. Chennai - 600 113'),
       city: new FormControl('chennai', Validators.required),
       state: new FormControl('Tamilnadu', Validators.required),
       pincode: new FormControl('534004', [Validators.required, Validators.pattern(/^\d{6}$/)]),
       position: new FormControl('developer', Validators.required),
       refferedBy: new FormControl('steve', Validators.required),
       qualification: new FormControl('B.Tech', Validators.required),
       total_experience: new FormControl('3 years', Validators.required),
       rel_experience: new FormControl('2 years', Validators.required),
       selectedTechs: new FormControl(['java','mysql'], Validators.required),
       interviewRound: new FormControl('Technical', Validators.required),
       interviewMode: new FormControl('online', Validators.required),
     });

}

  onSubmit() {}

 }
