from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class Contact(models.Model):
    Name=models.CharField(null=False)
    Email=models.EmailField(null=False)
    Message=models.TextField(max_length=300)

    def __str__(self):
        return self.Name
# Create your models here.
