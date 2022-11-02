# Generated by Django 4.0.8 on 2022-11-02 06:06

from django.db import migrations
import django_resized.forms
import users.models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=django_resized.forms.ResizedImageField(blank=True, crop=None, force_format=None, keep_meta=True, null=True, quality=-1, scale=None, size=[500, 500], upload_to=users.models.content_file_name),
        ),
    ]
