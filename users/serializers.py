from rest_framework import serializers, permissions

from django.contrib.auth.models import User

from .models import Account, SocialInfo


class SocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialInfo
        fields = ('facebook', 'twitter', 'skype', 'bitbucket')


class AccountSerializer(serializers.ModelSerializer):
    # username = serializers.CharField(source='user.username')
    # email = serializers.CharField(source='user.email')
    social = SocialSerializer(many=True, source='account_social')
    # s = serializers.SocialInfo.objects.all()

    class Meta:
        model = Account
        fields = ('user', 'phone', 'marital_status', 'gender', 'date_of_birth', 'hobby', 'address', 'bio', 'social')


# class AccountSer(serializers.ModelSerializer):
#     class Meta:
#         model = Account


class UserSerializer(serializers.ModelSerializer):
    permission_class = permissions.IsAdminUser
    account = AccountSerializer(source='user_account')

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'is_staff', 'password', 'account')

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


# class LoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField()
