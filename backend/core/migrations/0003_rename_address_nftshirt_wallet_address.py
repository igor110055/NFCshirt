# Generated by Django 4.0.5 on 2022-06-04 08:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_rename_empid_nftshirt_nft'),
    ]

    operations = [
        migrations.RenameField(
            model_name='nftshirt',
            old_name='address',
            new_name='wallet_address',
        ),
    ]