import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { User } from 'app/core/user/user.types';
import { UserService } from 'app/core/user/user.service';

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class AuthSignInComponent implements OnInit {
    loggedInUser: string = '';

    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    signInForm: UntypedFormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router,
        private _userService: UserService,
    ) {
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.signInForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            rememberMe: ['']
        });
        //////
        // Create an array of users
        //hughes.brian@company.com
        //admin

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void {
        const email = this.signInForm.value.email;
        const password = this.signInForm.value.password;
        const user = this._userService.getUserByEmail(email);
        
        if(user==null){
            // alert("kjshfk")
            // Re-enable the form
            this.signInForm.enable();

            // Reset the form
            this.signInNgForm.resetForm();

            // Set the alert
            this.alert = {
                type: 'error',
                message: 'User Does Not Exists'
            };

            // Show the alert
            this.showAlert = true;
        } else{
            localStorage.setItem("email", email);
       
        
       // Set the user's role
       this._authService.loggedInUser = user.role;
       this._authService.userName=user.name;

       localStorage.setItem("userRole", user.role);
       localStorage.setItem("userName", user.name);


        // console.log("loggedin is: "+ this._authService.loggedInUser);
        // console.log("user name is: "+ this._authService.userName);



        // Return if the form is invalid
        if (this.signInForm.invalid) {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;
        // Sign in
        this._authService.signIn(this.signInForm.value)
            .subscribe(
                () => {
                    //this._userService.user(this.signInForm.value)

                    // Set the redirect url.
                    // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                    // to the correct page after a successful sign in. This way, that url can be set via
                    // routing file and we don't have to touch here.
                    const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                    // Navigate to the redirect url
                    this._router.navigateByUrl(redirectURL);
                    //saving userlogin mail

                },
                (response) => {

                    // Re-enable the form
                    this.signInForm.enable();

                    // Reset the form
                    this.signInNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: 'Wrong email or password'
                    };

                    // Show the alert
                    this.showAlert = true;
                }
            );
        }
        
    }
}
function getUserByEmail(email: any, string: any) {
    throw new Error('Function not implemented.');
}

