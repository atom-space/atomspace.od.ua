# Generated by Django 2.1.7 on 2019-08-14 09:41

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20190618_1512'),
    ]

    operations = [
        migrations.AddField(
            model_name='resident',
            name='birthday',
            field=models.CharField(default=datetime.date(2019, 8, 14), max_length=10),
        ),
    ]