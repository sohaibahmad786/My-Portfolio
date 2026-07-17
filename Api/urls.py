from django.urls import path, include
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)
from .views import ContactView

router=DefaultRouter()
router.register('contact',ContactView)

urlpatterns = [
   path('login/',TokenObtainPairView.as_view()),
   path('login/refresh/',TokenRefreshView.as_view()),
]
