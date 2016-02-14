from rest_framework import serializers

from django.contrib.auth.models import User

from .models import Account, SocialInfo


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('usename', 'email', 'is_staff', 'password')


class SocialSerializer(serializers.ModelSerializer):
    # user =UserSerializer
    class Meta:
        model = SocialInfo
        fields = ('facebook', 'twitter', 'skype', 'bitbucket')


class AccountSerializer(serializers.ModelSerializer):
    user = UserSerializer
    # social = SocialSerializer

    class Meta:
        model = Account
        fields = ('user', 'phone', 'marital_status', 'gender', 'date_of_birth', 'hobby', 'address', 'bio')
