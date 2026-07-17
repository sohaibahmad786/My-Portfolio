from rest_framework import serializers
from django.contrib.auth.hashers import make_password, check_password
from .models import Contact
                    
class Contact_serializer(serializers.ModelSerializer):
    class Meta:
        model=Contact
        fields='__all__'
