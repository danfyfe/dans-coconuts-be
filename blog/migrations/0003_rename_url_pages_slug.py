# Generated by Django 4.2 on 2023-05-03 15:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_pages'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pages',
            old_name='url',
            new_name='slug',
        ),
    ]