import { Component, OnInit } from '@angular/core';
import {Company, Vacancy} from "./models";
import {CompanyService} from "./company.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hhFront';

  companies: Company[] = [];
  vacancies: Vacancy[] = [];




  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompanies();
    this.getVacancies();
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }


  getVacancies() {
    this.companyService.getVacancies().subscribe((vacancies) => {
      this.vacancies = vacancies;
    });
  }



}
