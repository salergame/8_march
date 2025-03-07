from django.urls import path
from . import views

urlpatterns = [
    path('', views.navigation, name='navigation'),
    path('index/', views.index, name='index'),
    path('mama/', views.mama, name='mama'),
    path('sister/', views.sister, name='sister'),
    path('test/', views.test, name='test'),
] 