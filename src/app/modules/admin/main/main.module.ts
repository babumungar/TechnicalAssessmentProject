import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CandidatesListComponent } from '../candidates-list/candidates-list.component';
import { MatTableModule } from '@angular/material/table';
import { MainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';


const exampleRoutes: Route[] = [
    {
        path: '',
        component: MainComponent
    }
];

@NgModule({
    declarations: [
        MainComponent,
        CandidatesListComponent,
        



    ],
    imports: [
        MatCardModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        RouterModule.forChild(exampleRoutes),
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
    ],
   
})
export class MainModule {



}
