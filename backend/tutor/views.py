from openai import OpenAI

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


# In request body: username, email, pass1, pass2
@api_view(['POST'])
def register_view(request):
    password1 = request.data.get('password')
    password2 = request.data.get('password2')
    if password1 == password2:
        serialize_user = UserSerializer(data = request.data)
        if serialize_user.is_valid():
            user = serialize_user.save()
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.pk,
                'email': user.email
            }, status=status.HTTP_201_CREATED)
        return Response(serialize_user.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response({'error': 'Passwords Must Match'}, status=status.HTTP_400_BAD_REQUEST)


# CRUD VIEWS:



def ask_openAi(message):
    '''
    client = OpenAI()
    completion = client.chat.completions.create(
        model="ft:gpt-3.5-turbo:my-org:custom_suffix:id",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": {message}}
        ]
    )
    return completion.choices[0].message
    '''
    return 'A Mock GPT Reply'


# POST Req to: ("http://localhost:8000/binarysearch/")
# pass the token from localstorage in the request authorization header
# pass the message in the request body

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
    
    return Response({'error': 'Token Not Provided In Auth-Header'}, status=status.HTTP_400_BAD_REQUEST)




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
