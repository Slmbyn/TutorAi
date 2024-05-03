from django.urls import path
from .. import views

urlpatterns = [
    path('add_note/', views.add_note, name='add_note'),
    path('delete_note/', views.delete_note, name='delete_note'),
]