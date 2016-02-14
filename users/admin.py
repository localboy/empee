from django.contrib import admin
from .models import Account, SocialInfo

# Register your models here.


admin.site.register(Account)
admin.site.register(SocialInfo)