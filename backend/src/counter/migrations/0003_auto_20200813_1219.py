# Generated by Django 3.1 on 2020-08-13 10:19

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('counter', '0002_counter_history'),
    ]

    operations = [
        migrations.AlterField(
            model_name='counter',
            name='history',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=None),
        ),
    ]
