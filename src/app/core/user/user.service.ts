import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, ReplaySubject, tap } from 'rxjs';
import { User } from 'app/core/user/user.types';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public users: User[] = [
        { id: '1', name: 'hr1', email: 'hr1@gmail.com', password: 'pass1', role: "hr" },
        { id: '2', name: 'hr2', email: 'hr2@gmail.com', password: 'pass1', role: "hr" },
        { id: '3', name: 'hr3', email: 'hr3@gmail.com', password: 'pass1', role: "hr" },
        { id: '4', name: 'interviewer1', email: 'interviewer1@gmail.com', password: 'pass1', role: "interviewer" },
        { id: '5', name: 'interviewer2', email: 'interviewer2@gmail.com', password: 'pass1', role: "interviewer" },
        { id: '6', name: 'interviewer3', email: 'interviewer3@gmail.com', password: 'pass1', role: "interviewer" },

    ];
    
    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set user(value: any) {
        console.log(value);

        // Store the value
        this._user.next(value);
    }

    get user$(): Observable<User> {
        return this._user.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current logged in user data
     */
    get(): Observable<User> {
        return this._httpClient.get<User>('api/common/user').pipe(
            tap((user) => {
                this._user.next(user);
                console.log(user);
                
            })
        );
    }

    /**
     * Update the user
     *
     * @param user
     */
    update(user: User): Observable<any> {
        return this._httpClient.patch<User>('api/common/user', { user }).pipe(
            map((response) => {
                this._user.next(response);
            })
        );
        }

    getUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }
}
