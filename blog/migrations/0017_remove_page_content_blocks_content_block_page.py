# Generated by Django 4.2 on 2023-05-03 19:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0016_remove_content_block_page_page_content_blocks'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='page',
            name='content_blocks',
        ),
        migrations.AddField(
            model_name='content_block',
            name='page',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='blog.page'),
        ),
    ]