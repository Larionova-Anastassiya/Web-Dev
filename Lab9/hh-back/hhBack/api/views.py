from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import *


# Create your views here.


def companies_list(request):
    return JsonResponse(
        list(Company.objects.values()), safe=False, json_dumps_params={'indent': 2}
    )


def vacancies_list(request):
    return JsonResponse(
        list(Vacancy.objects.values()), safe=False, json_dumps_params={'indent': 2}
    )


def company_by_id(request, id):
    for company in Company.objects.values():
        if str(company["id"]) == str(id):
            return JsonResponse(company, json_dumps_params={'indent': 2})

    return JsonResponse({'error': 'Product not found'})


def vacancy_by_id(request, id):
    for vacancy in Vacancy.objects.values():
        if str(vacancy["id"]) == str(id):
            return JsonResponse(vacancy, json_dumps_params={'indent': 2})

    return JsonResponse({'error': 'Product not found'})


def vac_by_company(request, id):
    tmp = []
    for vacancy in Vacancy.objects.values():
        if str(vacancy['company_id']) == str(id):
            tmp.append(vacancy)

    if len(tmp) > 0:
        return JsonResponse(tmp, safe=False, json_dumps_params={'indent': 2})

    return JsonResponse({'error': 'Product not found'})


def vac_top_ten(request):
    vacancies = Vacancy.objects.values()

    vacancies = sorted(vacancies, key=lambda x: x["salary"], reverse=True)
    return JsonResponse(vacancies[:10], safe=False, json_dumps_params={'indent': 2})
