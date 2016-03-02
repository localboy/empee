from django.contrib.auth.models import User

from rest_framework import serializers


from .models import Team, TeamMember

# Serializer Clases


class TeamMemberSerializer(serializers.ModelSerializer):
    first_user = serializers.ReadOnlyField(source='user.first_name')
    last_user = serializers.ReadOnlyField(source='user.last_name')

    class Meta:
        model = TeamMember
        fields = ('id', 'team', 'role', 'first_user', 'last_user')


class TeamSerializer(serializers.ModelSerializer):
    # member = TeamMemberSerializer(many=True, source='team_member')

    class Meta:
        model = Team
        # fields = ('id', 'name', 'description', 'member')
