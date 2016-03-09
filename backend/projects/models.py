from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

from teams.models import Team

# Create your models here.


class Project(models.Model):
    title = models.CharField(max_length=40)
    description = models.TextField()
    start_date = models.CharField(max_length=50, null=True)
    end_date = models.CharField(max_length=50, null=True)
    team = models.ForeignKey(Team, null=True, related_name='project_team')
    # user = models.ForeignKey(User)

    def __str__(self):
        return self.title


class ProjectMember(models.Model):
    PROJECT_MEMBER_ROLE = (
        ('Mgr', 'Manager'),
        ('Mbr', 'Member')
    )

    project = models.ForeignKey(Project, related_name='project_member')
    user = models.ForeignKey(User)
    role = models.CharField(max_length=3, choices=PROJECT_MEMBER_ROLE)
