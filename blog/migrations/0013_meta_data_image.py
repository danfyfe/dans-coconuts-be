# Generated by Django 4.2 on 2023-05-03 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0012_contentmodule_imagecontent_contentmodule_textcontent'),
    ]

    operations = [
        migrations.AddField(
            model_name='meta_data',
            name='image',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
