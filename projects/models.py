from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Project(models.Model):
    title = models.CharField(max_length=40)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
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