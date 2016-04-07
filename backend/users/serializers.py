from rest_framework import serializers, permissions

from django.contrib.auth.models import User

from .models import Account, SocialInfo


class UserSerializer(serializers.ModelSerializer):

    old_password = serializers.CharField(required=False)
    confirm_password = serializers.CharField(required=False)

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'username', 'email', 'old_password', 'password', 'confirm_password')

    def update(self, instance, validate_data):
        instance.id = validate_data.get('id', instance.id)
        instance.first_name = validate_data.get('first_name', instance.first_name)
        instance.last_name = validate_data.get('last_name', instance.last_name)
        instance.username = validate_data.get('username', instance.username)
        instance.email = validate_data.get('email', instance.email)
        instance.password = validate_data.get('password', instance.password)

        # For hashing password
        for attr, value in validate_data.items():
            if attr == 'password':
                instance.set_password(value)
            else:
                setattr(instance, attr, value)

        instance.save()
        return instance

    def validate(self, data):

        # if data.get('password') != self.context['request'].user.password:
        #     print self.context['request'].user.password
        #     raise serializers.ValidationError("Old password not match.")

        if not data.get('password') or not data.get('confirm_password'):
            raise serializers.ValidationError("Please enter a password and "
                                              "confirm it.")

        if data.get('password') != data.get('confirm_password'):
            raise serializers.ValidationError("Those passwords don't match.")

        return data

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'first_name', 'last_name', 'username', 'email', 'password')


class SocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialInfo
        fields = ('facebook', 'twitter', 'skype', 'bitbucket')


class AccountSerializer(serializers.ModelSerializer):
    # username = serializers.CharField(source='user.username')
    # email = serializers.CharField(source='user.email')
    current_user = serializers.CharField(source='get_password')

    print current_user
    social = SocialSerializer(many=True, source='account_social', required=False)
    # s = serializers.SocialInfo.objects.all()

    class Meta:
        model = Account
        fields = ('id', 'user', 'phone', 'marital_status', 'gender', 'date_of_birth',
                  'hobby', 'address', 'bio', 'current_user', 'social')


# class AccountSer(serializers.ModelSerializer):
#     class Meta:
#         model = Account


class UserProfileSerializer(serializers.ModelSerializer):
    permission_class = permissions.IsAdminUser
    account = AccountSerializer(many=False, source='account_ref_user')

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'username', 'email', 'is_staff', 'password', 'account')

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
