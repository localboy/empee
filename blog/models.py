from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

from projects.models import Project

# Create your models here.


class Post(models.Model):
    user = models.ForeignKey(User, related_name='user_post')
    title = models.CharField(max_length=250)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    project = models.ForeignKey(Project, related_name='project_post')

    def __str__(self):
        return self.title


class Comment(models.Model):
    post = models.ForeignKey(Post, related_name='post_comment')
    user = models.ForeignKey(User, related_name='user_comment')
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.post.title