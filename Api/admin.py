from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Contact

admin.site.register(Contact)

# Register your models here.
