# Generated by Django 4.0.8 on 2022-10-26 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_jujamall_set_current'),
    ]

    operations = [
        migrations.AddField(
            model_name='jujamall',
            name='title',
            field=models.CharField(default='jujamall', max_length=255),
            preserve_default=False,
        ),
    ]
