from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import Http404, HttpResponse

from api.models import *
from api.serializers import *


class CompanyListApiView(APIView):

    def get(self, request):
        company = Company.objects.all()
        serializer = CompanySerializer(company, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class CompanyIdApiView(APIView):

    def get_object(self, pk):
        try:
            company = Company.objects.get(id=pk)
        except Company.DoesNotExist as e:
            raise Http404
        return company

    def get(self, request, pk):
        company = self.get_object(pk)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, pk):
        company = self.get_object(pk)
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

    def delete(self, request, pk):
        company = self.get_object(pk)
        company.delete()
        return Response({'message': 'deleted'}, status=204)


class VacancyListApiView(APIView):

    def get(self, request):
        vacancy = Vacancy.objects.all()
        serializer = VacancySerializer2(vacancy, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer2(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class VacancyIdApiView(APIView):

    def get_object(self, pk):
        try:
            vacancy = Vacancy.objects.get(id=pk)
        except Vacancy.DoesNotExist as e:
            raise Http404
        return vacancy

    def get(self, request, pk):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer2(vacancy)
        return Response(serializer.data)

    def put(self, request, pk):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer2(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

    def delete(self, request, pk):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return Response({'message': 'deleted'}, status=204)
