# Generated by Django 3.1 on 2020-08-13 10:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('counter', '0003_auto_20200813_1219'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='counter',
            name='history',
        ),
        migrations.AddField(
            model_name='counter',
            name='operation',
            field=models.CharField(default='', max_length=20),
        ),
    ]
