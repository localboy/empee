import itertools

from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import generics, viewsets

from .serializers import AccountSerializer, SocialSerializer, UserSerializer
from .models import Account, SocialInfo

# Create your views here.


class AccountViewSet(viewsets.ModelViewSet):
    # user_queryset = User.objects.all()
    # account_queryset = Account.objects.all()
    queryset = Account.objects.all()
    # social_queryset = SocialInfo.objects.all()

    # queryset = list(itertools.chain(user_queryset , social_queryset, account_queryset))

    serializer_class = AccountSerializer


class Users(viewsets.ModelViewSet):
    queryset = User.objects.all()

    serializer_class = UserSerializer