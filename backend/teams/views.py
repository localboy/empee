from django.shortcuts import render

from rest_framework import viewsets

from .models import Team, TeamMember
from .serializers import TeamSerializer, TeamMemberSerializer


# Create your views here.


class TeamViewSets(viewsets.ModelViewSet):
    queryset = Team.objects.all()

    serializer_class = TeamSerializer


class TemMemberViewSets(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all()

    serializer_class = TeamMemberSerializer
