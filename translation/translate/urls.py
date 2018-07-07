from django.urls import path
from . import views

app_name = 'translate'
urlpatterns = [
    path('', views.main, name='main'),
    path('index/', views.index, name='index'),
]
