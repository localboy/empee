from __future__ import unicode_literals

from django.db import models
# from  django.contrib.auth.models import AbstructBaseUser
# from  django.contrib.auth.models import BaseUserManager
from  django.contrib.auth.models import User

# Create your models here.


class Account(models.Model):
    MARITAL_STATUS = (
        ('U', 'Unmarried'),
        ('M', 'Married')
    )

    GENDER = (
        ('M', 'Male'),
        ('F', 'Female')
    )
    # name = models.CharField(max_length=40)
    # nick_name = models.CharField(max_length=40)
    # email = models.EmailField(unique=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15)
    marital_status = models.CharField(max_length=1, choices=MARITAL_STATUS)
    gender = models.CharField(max_length=1, choices=GENDER)
    date_of_birth = models.DateField()
    hobby = models.CharField(max_length=40)
    address = models.TextField()
    bio = models.TextField()

    def __str__(self):
        return self.user.username


class SocialInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    facebook = models.CharField(max_length=50)
    twitter = models.CharField(max_length=50)
    skype = models.CharField(max_length=50)
    bitbucket = models.CharField(max_length=50)

    def __str__(self):
        return self.user.username