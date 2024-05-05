
# DRF Imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status

# Django Auth
from django.contrib.auth import authenticate, login

# Model CRUD
from django.views.generic import CreateView, ListView, DeleteView

# Models & Serializers
from .models import BinaryConvo
from .serializers import UserSerializer, BinaryConvoSerializer


# Create your views here.

# USER VIEWS:

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

@api_view(['POST'])
def register_view(request):
    password1 = request.data.get('password1')
    password2 = request.data.get('password2')
    if password1 == password2:
        serialize_user = UserSerializer(data = request.data)
        if serialize_user.is_valid():
            user = serialize_user.save()
            token = Token.objects.get_or_create(user=user)
            return Response({
                'token': token,
                'user_id': user.pk,
                'email': user.email
            }, status=status.HTTP_201_CREATED)
        return Response(serialize_user.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response({'error': 'Passwords Must Match'}, status=status.HTTP_400_BAD_REQUEST)


# CRUD VIEWS:

def ask_openAi(message):
    return 'A Mock GPT Reply'

@api_view(['POST'])
def binary_search(request):
    token = request.headers.get('Authorization')
    
    if token:
        try:
            user = Token.objects.get(key=token).user
            message = request.data.get('message')
            gpt_response = ask_openAi(message)
            
            convo_data = {
                'user_id' : user.pk,
                'message' : message,
                'response' : gpt_response
            }
            
            serializer = BinaryConvoSerializer(data=convo_data)
            
            if serializer.is_valid():
                serializer.save()
                return Response({'response': gpt_response})
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST )
            
        except Token.DoesNotExist:
            return Response({'error': 'Token Not Found'}, status=status.HTTP_401_UNAUTHORIZED)
    
    return Response({'error': 'Token Not Provided'}, status=status.HTTP_400_BAD_REQUEST)




# Part of stretch goal
# TODO: REPLACE BELOW WITH ListView/CreateView/DeleteView
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
