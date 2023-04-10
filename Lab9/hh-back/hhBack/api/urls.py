from django.urls import path, re_path
from api import views

urlpatterns = [
    path('companies/', views.companies_list),
    re_path(r'^companies/([0-5])/$', views.company_by_id),
    re_path(r'^companies/(\d{1,2})/vacancies/$', views.vac_by_company),

    path('vacancies/', views.vacancies_list),
    re_path(r'^vacancies/(\d{1,2})/$', views.vacancy_by_id),
    re_path(r'vacancies/top_ten/$', views.vac_top_ten)
]