from rest_framework import serializers

from .models import Project, ProjectMember


class ProjectMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectMember


class ProjectSerializer(serializers.ModelSerializer):
    member = ProjectMemberSerializer(many=True, source='project_member')

    class Meta:
        model = Project
        fields = ('id', 'title', 'description', 'start_date', 'end_date', 'member')
