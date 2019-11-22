# Generated by Django 2.2.5 on 2019-11-07 18:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_auto_20190819_1122'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resident',
            name='birthday',
            field=models.CharField(default=datetime.date(2019, 11, 7), max_length=10),
        ),
        migrations.AlterUniqueTogether(
            name='merch',
            unique_together={('name', 'cost')},
        ),
    ]