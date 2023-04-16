from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.serializers import CompanySerializer, VacancySerializer


# Create your views here.

@api_view(['GET', 'POST'])
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)


@api_view(['GET', 'POST'])
def vacancies_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)


@api_view(['GET', 'PUT', 'DELETE'])
def company_by_id(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    elif request.method == 'DELETE':
        company.delete()
        return Response({'message': 'deleted'}, status=204)
    return Response({'message': 'Sorry, this don t work or company not fount'}, status=204)


@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_by_id(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return Response({'error': str(e)}, status=400)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    elif request.method == 'DELETE':
        vacancy.delete()
        return Response({'message': 'deleted'}, status=204)
    return Response({'message': 'Sorry, this dont work or vacancy not fount'}, status=204)

