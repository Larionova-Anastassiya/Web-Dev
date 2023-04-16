import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company, Vacancy} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://localhost:8000';

  constructor(private client: HttpClient) {
  }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.BASE_URL}/api/companies3/`);
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies3/`);
  }




}
