from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
    path('binarysearch/', views.binary_search, name='binary_search'),
    path('binaryconvohistory/', views.get_binary_convo, name='get_binary_convo'),
    # path('logout/', views.logout_view, name='logout'), #log out handled in frontend by removing token from localstorage
]