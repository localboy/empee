from rest_framework import serializers

from django.contrib.auth.models import User

from .models import Account, SocialInfo


class AccountSer(serializers.ModelSerializer):
    class Meta:
        model = Account


class UserSerializer(serializers.ModelSerializer):
    # account = AccountSer

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'is_staff', 'password')

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr == 'password':
                instance.set_password(value)
            else:
                setattr(instance, attr, value)
        instance.save()
        return instance


class SocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialInfo
        # fields = ('facebook', 'twitter', 'skype', 'bitbucket')


class AccountSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    email = serializers.CharField(source='user.email')
    social = SocialSerializer(many=True, source='account_social')
    # s = serializers.SocialInfo.objects.all()

    class Meta:
        model = Account
        fields = ('phone', 'marital_status', 'gender', 'date_of_birth', 'hobby', 'address', 'bio', 'username', 'email', 'social')


# class SocialSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = SocialInfo
#         fields = ('facebook', 'twitter', 'skype', 'bitbucket')
