import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private baseURL = "http://localhost:9090/skill/";
  constructor(private httpClient: HttpClient) { }

  createSkill(skill: any): Observable<Object> {
    const url = `${this.baseURL}/create`;
    return this.httpClient.post<any>(url, skill);
  }

  getSkillById(id: number): Observable<Object> {
    const url = `${this.baseURL}/getbyid/${id}`;
    return this.httpClient.get<any>(url);
  }

  getSkillByName(name: string): Observable<Object> {
    const url = `${this.baseURL}/getbyname/${name}`;
    return this.httpClient.get<any>(url);
  }

  deleteSkill(id: number): Observable<string> {
    const url = `${this.baseURL}/delete/${id}`;
    return this.httpClient.delete<string>(url);
  }
  
}
