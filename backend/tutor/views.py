from django.shortcuts import render

# DRF Imports
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, status
from rest_framework.parsers import JSONParser

# Django Auth
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User

# Serializers
from .serializers import UserSerializer


# Create your views here.

@api_view(['POST'])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(request, email=email, password=password)
    if user is not None:
        login(request, user)
        token = Token.objects.get_or_create(user=user)
        return Response({
            'token': token,
            'user_id': user.pk,
            'email': user.email
        }, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid Login Credentials'}, status=status.HTTP_401_UNAUTHORIZED)


def logout_view(request):
    pass

def register_view(request):
    # retrieve info from request
    username = request.data.get('username')
    email = request.data.get('email')
    password1 = request.data.get('password1')
    password2 = request.data.get('password2')
    # check that pass1 == pass2
    if password1 == password2:
        # serialize
        # if valid:
            # save user
            # create a token and return that in the response
            token = Token.objects.get_or_create(user=user)
    pass

def binary_search(request):
    pass

def view_notes(request):
    # search and filter through all notes in database (grab the ones with user's fk)
    # return it
    pass

def add_note(request):
    # create a new instance of Note class
    # pass in the current user's id/key
    pass

def delete_note(request):
    pass
