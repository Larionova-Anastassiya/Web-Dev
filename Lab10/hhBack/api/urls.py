from django.urls import path, re_path
from api.Views import views_basic, views_fbv, views_cbv
from api.Views.views_cbv import *

urlpatterns = [
    path('companies/', views_basic.companies_list),
    path('vacancies/', views_basic.vacancies_list),
    re_path(r'^companies/([0-5])/$', views_basic.company_by_id),
    re_path(r'^vacancies/(\d{1,2})/$', views_basic.vacancy_by_id),
    re_path(r'^companies/(\d{1,2})/vacancies/$', views_basic.vac_by_company),
    re_path(r'vacancies/top_ten/$', views_basic.vac_top_ten),


    path('companies2/', views_fbv.companies_list),
    path('vacancies2/', views_fbv.vacancies_list),
    re_path(r'^companies2/([0-5])/$', views_fbv.company_by_id),
    re_path(r'^vacancies2/(\d{1,2})/$', views_fbv.vacancy_by_id),


    path('companies3/', CompanyListApiView.as_view()),
    re_path(r'^companies3/([0-5])/$', CompanyIdApiView.as_view()),
    path('vacancies3/', VacancyListApiView.as_view()),
    re_path(r'^vacancies3/([0-5])/$', VacancyIdApiView.as_view()),

]

