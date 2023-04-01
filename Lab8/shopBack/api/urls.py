from django.urls import path, re_path
from api import views

urlpatterns = [
    path('products1/', views.product_list1),
    path('categories1/', views.category_list1),

    path('home/', views.home),
    path('about/', views.about),

    path('products/', views.product_list2),
    path('products/<int:product_id>/', views.product_detail2),

    path('categories/', views.category_list2),
    path('categories/<int:category_id>/', views.category_detail2),
    path('categories/<int:category_id>/products/', views.category_products)
]
