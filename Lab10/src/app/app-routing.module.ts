import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VacancyListComponent} from "./vacancy-list/vacancy-list.component";

const routes: Routes = [
  {path: ":company_id", component: VacancyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
