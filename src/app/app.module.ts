import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, ExtraOptions, PreloadAllModules, Router, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { MatCardModule } from '@angular/material/card';
import { CandidatesListComponent } from './modules/admin/candidates-list/candidates-list.component';
import { MatTableModule } from '@angular/material/table';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ShowCandidateComponent } from './modules/admin/show-candidate/show-candidate.component';
import { CandidateFormComponent } from './modules/admin/candidate-form/candidate-form.component';
import { EditCandidateComponent } from './modules/admin/edit-candidate/edit-candidate.component';
import { InterviewerPageComponent } from './modules/admin/interviewer-page/interviewer-page.component';
import { AssessmentDetailsPageComponent } from './modules/admin/assessment-details-page/assessment-details-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';




const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
        ShowCandidateComponent,
        CandidateFormComponent,
        EditCandidateComponent,
        InterviewerPageComponent,
        AssessmentDetailsPageComponent,
        

    ],
    imports     : [
        MatDialogModule,
        MatCardModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        MatTableModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
        MatFormFieldModule,
        MatSelectModule,
        


        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({})
    ],
    providers: [],

    bootstrap   : [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    
        
    
})
export class AppModule
{
}
