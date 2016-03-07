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

    def validate(self, data):
        members = self.initial_data['member']
        member_ids = []
        for member in members:
            if member['user'] in member_ids:
                raise serializers.ValidationError("Redundant members.")
            member_ids.append(member['user'])
        return data

    def create(self, validated_data):
        members = validated_data.pop('team_member')

        team = Team.objects.create(**validated_data)

        for member in members:
            member['team'] = team
            TeamMember.objects.create(**member)
        return team

    def update(self, instance, validated_data):
        members = validated_data.pop('team_member')
        updated_data = super(TeamSerializer, self).update(instance, validated_data)

        for member in members:
            if 'team' in member:
                TeamMember.objects.filter(team=member['team'], user=member['user']).update(**member)
                continue
            member['team'] = instance
            TeamMember.objects.create(**member)
        return updated_data
