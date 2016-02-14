import itertools

from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import generics, viewsets

from .serializers import AccountSerializer
from .models import Account, SocialInfo

# Create your views here.


class AccountViewSet(viewsets.ModelViewSet):
    # user_queryset = User.objects.all()
    # social_queryset = SocialInfo.objects.all()
    # account_queryset = Account.objects.all()
    queryset = Account.objects.all()

    # queryset = list(itertools.chain(user_queryset , social_queryset, account_queryset))

    serializer_class = AccountSerializer