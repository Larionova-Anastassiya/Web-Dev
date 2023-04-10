from django.db import models


# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField(max_length=1000)
    city = models.CharField(max_length=256)
    address = models.TextField(max_length=1000)

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"

    def __str__(self):
        return f'{self.name} {self.city}'


class Vacancy(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField(max_length=1000)
    salary = models.FloatField(default=0)
    company = models.ForeignKey("Company", on_delete=models.CASCADE, default=0)

    class Meta:
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"

    def __str__(self):
        return f'{self.name} {self.salary} {self.company.name}'
