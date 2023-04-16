import { Injectable } from '@angular/core';
import {Vacancy} from "./models";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = "http://127.0.0.1:8000"

  constructor(private client: HttpClient) { }

  getVacancies(company_id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${company_id}/vacancies/`)
  }
}
