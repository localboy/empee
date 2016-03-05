from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Team(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.name


class TeamMember(models.Model):
    TEAM_MEMBER_ROLE = (
        ('Leader', 'Leader'),
        ('Member', 'Member')
    )

    team = models.ForeignKey(Team, related_name='team_member')
    user = models.ForeignKey(User)
    role = models.CharField(max_length=15, choices=TEAM_MEMBER_ROLE)

    def __str__(self):
        return self.team.name

    def get_team_user(self):
        team_user = User.objects.filter(id=self.user)
        return team_user
