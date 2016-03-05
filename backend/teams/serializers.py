from django.contrib.auth.models import User

from rest_framework import serializers


from .models import Team, TeamMember

# Serializer Clases


class TeamMemberSerializer(serializers.ModelSerializer):
    first_name = serializers.ReadOnlyField(source='user.first_name', required=False)
    last_name = serializers.ReadOnlyField(source='user.last_name', required=False)

    class Meta:
        model = TeamMember
        fields = ('id', 'team', 'user', 'role', 'first_name', 'last_name')


class TeamSerializer(serializers.ModelSerializer):
    member = TeamMemberSerializer(many=True, source='team_member', required=False)

    class Meta:
        model = Team
        fields = ('id', 'name', 'description', 'member')
