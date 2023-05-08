# Generated by Django 4.2 on 2023-05-03 19:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0015_remove_meta_data_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='content_block',
            name='page',
        ),
        migrations.AddField(
            model_name='page',
            name='content_blocks',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='blog.content_block'),
        ),
    ]
