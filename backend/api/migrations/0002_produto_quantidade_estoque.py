# Generated by Django 5.0 on 2023-12-15 19:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='produto',
            name='quantidade_estoque',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]