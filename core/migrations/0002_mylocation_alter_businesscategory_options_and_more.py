# Generated by Django 4.0.8 on 2022-10-30 10:22

from django.db import migrations, models
import places.fields


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MyLocation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', places.fields.PlacesField(max_length=255)),
            ],
        ),
        migrations.AlterModelOptions(
            name='businesscategory',
            options={'ordering': ('title',), 'verbose_name': 'category', 'verbose_name_plural': 'Business Categories'},
        ),
        migrations.AlterModelOptions(
            name='productcategory',
            options={'ordering': ('title',), 'verbose_name': 'category', 'verbose_name_plural': 'Product Categories'},
        ),
    ]
