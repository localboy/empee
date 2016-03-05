from django.contrib import admin

from .models import Project, ProjectMember

# Register your models here.


class MemberInline(admin.TabularInline):
    model = ProjectMember


class ProjectAdmin(admin.ModelAdmin):
    inlines = [
        MemberInline,
    ]


admin.site.register(Project, ProjectAdmin)