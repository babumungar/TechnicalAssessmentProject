import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidateFormComponent } from '../candidate-form/candidate-form.component';
import { CandidatesListComponent } from '../candidates-list/candidates-list.component';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    encapsulation: ViewEncapsulation.None
})

export class MainComponent {
    color: any;
    searchText: string = '';
    userType = localStorage.getItem("userRole");


    constructor(public dialog: MatDialog, private router: Router, private authService:AuthService ) { }

   
    addCandidate() {
        //console.log("value in main :"+this.authService.loggedInUser);
        this.router.navigate(['candidate-form']);    
    }
}


