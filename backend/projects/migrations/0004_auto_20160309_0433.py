# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-03-09 04:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_project_team'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='end_date',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='start_date',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
