from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('binarysearch/', views.binary_search, name='binary_search'),
    path('profile/', views.profile, name='profile'),
    path('view_notes/', views.view_notes, name='view_notes'),
    path('add_note/', views.add_note, name='add_note'),
    path('delete_note/', views.delete_note, name='delete_note'),
]