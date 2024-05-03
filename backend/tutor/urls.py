from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('binarysearch/', views.binary_search, name='binary_search'),
    path('profile/', views.profile, name='profile'),
    path('notes/', views.notes, name='notes'),
]