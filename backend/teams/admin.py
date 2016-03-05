from django.contrib import admin

from .models import Team, TeamMember

# Register your models here.


class ModelInline(admin.TabularInline):
    model = TeamMember
    extra = 1


class TeamAdmin(admin.ModelAdmin):
    inlines = [
        ModelInline,
    ]

admin.site.register(Team, TeamAdmin)
