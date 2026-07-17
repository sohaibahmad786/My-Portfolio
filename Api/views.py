from django.shortcuts import render
import jwt
# import stripe
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListCreateAPIView
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.authentication import TokenAuthentication,SessionAuthentication
from rest_framework import permissions
from rest_framework import generics,filters
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from datetime import datetime, timedelta
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.db.models import Q
from rest_framework .viewsets import ModelViewSet
# import PyPDF2

from .models import Contact
from .serializer import Contact_serializer

    
class ContactView(ModelViewSet):
    queryset=Contact.objects.all()
    serializer_class=Contact_serializer

# Create your views here.





