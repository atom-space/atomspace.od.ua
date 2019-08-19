# Generated by Django 2.1.7 on 2019-08-19 11:22

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_auto_20190816_1712'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mentor',
            old_name='created_at',
            new_name='created_time',
        ),
        migrations.RenameField(
            model_name='mentor',
            old_name='number',
            new_name='phone',
        ),
        migrations.RenameField(
            model_name='merch',
            old_name='price',
            new_name='cost',
        ),
        migrations.RenameField(
            model_name='order',
            old_name='getFromAtom',
            new_name='is_get_from_atom',
        ),
        migrations.RenameField(
            model_name='order',
            old_name='merch_cost',
            new_name='npMail',
        ),
        migrations.RenameField(
            model_name='resident',
            old_name='created_at',
            new_name='created_time',
        ),
        migrations.RenameField(
            model_name='resident',
            old_name='number',
            new_name='phone',
        ),
        migrations.RemoveField(
            model_name='order',
            name='merch_name',
        ),
        migrations.RemoveField(
            model_name='order',
            name='np_mail',
        ),
        migrations.AddField(
            model_name='mentor',
            name='updated_time',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='created_time',
            field=models.DateTimeField(auto_now_add=True, default=None),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='merch',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='orders', to='app.Merch'),
        ),
        migrations.AddField(
            model_name='order',
            name='updated_time',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AddField(
            model_name='resident',
            name='updated_time',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='city',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='order',
            name='merch_size',
            field=models.CharField(max_length=1),
        ),
        migrations.AlterField(
            model_name='order',
            name='phone',
            field=models.CharField(max_length=13),
        ),
        migrations.AlterField(
            model_name='resident',
            name='birthday',
            field=models.CharField(default=datetime.date(2019, 8, 19), max_length=10),
        ),
    ]