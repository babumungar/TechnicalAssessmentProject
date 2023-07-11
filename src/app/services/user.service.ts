import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/core/user/user.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private baseURL = "http://localhost:9090/user/";
  constructor(private httpClient: HttpClient) { }
}
