from rest_framework import serializers

from .models import Project, ProjectMember
from teams.serializers import TeamSerializer


class ProjectMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectMember


class ProjectSerializer(serializers.ModelSerializer):
    member = ProjectMemberSerializer(many=True, source='project_member', required=False)
    # team = TeamSerializer(many=True, source='project_team', required=False)

    class Meta:
        model = Project
        fields = ('id', 'title', 'description', 'start_date', 'end_date', 'team', 'member')
