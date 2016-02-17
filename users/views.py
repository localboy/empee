import itertools
import json

# from django.shortcuts import render
from django.contrib.auth import authenticate, login
# from django.contrib.auth.models import User

from rest_framework import generics, viewsets, status, views, serializers
from rest_framework.response import Response

from .serializers import AccountSerializer, UserSerializer
from .models import Account

# Create your views here.


class AccountViewSet(viewsets.ModelViewSet):
    # user_queryset = User.objects.all()
    # account_queryset = Account.objects.all()
    queryset = Account.objects.all()
    # social_queryset = SocialInfo.objects.all()

    # queryset = list(itertools.chain(user_queryset , social_queryset, account_queryset))

    serializer_class = AccountSerializer


class LoginView(views.APIView):
    # queryset = User.objects.all()
    #
    # serializer_class = UserSerializer
    # permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = json.loads(request.body)

        username = data.get('username', None)
        password = data.get('password', None)
        # email = data.get('email', None)
        # is_staff = data.get('is_staff', None)

        account = authenticate(userame=username, password=password)

        if account is not None:
            if account.is_active:
                login(request, account)

                serialized = UserSerializer(account)

                return Response(serialized.data)
            else:
                return Response({
                    'status': 'Unauthorized',
                    'message': 'The account has disabled.'
                }, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({
                'status': 'Unauthorized',
                'message': 'Username/password incorrect.'
            }, status=status.HTTP_401_UNAUTHORIZED)

