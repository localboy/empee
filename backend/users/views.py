import itertools
import json
import uuid

from datetime import datetime, timedelta

# from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.utils import timezone

from rest_framework import generics, viewsets, status, views, serializers
from rest_framework.response import Response


from .serializers import AccountSerializer, UserSerializer, UserProfileSerializer
from .models import Account, Token

# Create your views here.


class AccountViewSet(viewsets.ModelViewSet):
    # user_queryset = User.objects.all()
    # account_queryset = Account.objects.all()
    queryset = Account.objects.all()
    # social_queryset = SocialInfo.objects.all()

    # queryset = list(itertools.chain(user_queryset , social_queryset, account_queryset))

    serializer_class = AccountSerializer


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserProfileView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer


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

        account = authenticate(username=username, password=password)

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


class ChangePassword(views.APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request):
        user = User.objects.get(pk=request.user.id)
        if request.data['old_password']:
            old_password = request.data['old_password']
            if user.check_password(old_password):
                user.set_password(request.data['password'])
                user.save()
                return Response()
            else:
                raise serializers.ValidationError('Invalid current password')
        else:
            raise serializers.ValidationError('Please enter current password')


class ForgetPassword(views.APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_class = ()

    def post(self, request):
        try:
            user = User.objects.get(email=request.data['email'])
            token = uuid.uuid4()
            expire_date = datetime.now() + timedelta(hours=24)
            t = Token(user=user, token=token, expire_date=expire_date)
            t.save()
            send_mail('Password reset'
                      , 'Please click the link to get reset your password. http://127.0.0.1:8080/#/reset/' + str(token)
                      , 'jakir1124@gmail.com', [user.email],
                      fail_silently=False)
            return Response()
        except User.DoesNotExist:
            raise serializers.ValidationError('Email does not exists!')


class ResetPassword(views.APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_class = ()

    def post(self, request):
        try:
            token = Token.objects.get(token=request.data['token'])
            if token.expire_date >= timezone.now():
                user = User.objects.get(pk=token.user_id)
                new_pass = request.data['new_password']
                confirm_pass = request.data['confirm_password']
                if new_pass == confirm_pass:
                    user.set_password(new_pass)
                    user.save()
                    token.delete()
                    return Response()
                else:
                    raise serializers.ValidationError('Password not matched')
            else:
                raise serializers.ValidationError('Token expired!')
        except Token.DoesNotExist:
            raise serializers.ValidationError('Invalid token')
