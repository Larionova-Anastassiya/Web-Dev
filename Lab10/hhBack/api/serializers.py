from rest_framework import serializers

from api.models import *


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    description = serializers.CharField(required=True)
    city = serializers.CharField(required=True)
    address = serializers.CharField(required=True)

    def create(self, validated_data):
        company = Company.objects.create(name=validated_data['name'],
                                         description=validated_data['description'],
                                         city=validated_data['city'],
                                         address=validated_data['address'])
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.save()
        return instance


class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    description = serializers.CharField(required=True)
    salary = serializers.CharField(required=True)
    company = serializers.CharField(required=True)

    def create(self, validated_data):
        vacancy = Vacancy.objects.create(name=validated_data['name'],
                                         description=validated_data['description'],
                                         salary=validated_data['salary'],
                                         company=Company.objects.get(pk=validated_data['company']))
        return vacancy

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.save()
        return instance


class VacancySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company',)
