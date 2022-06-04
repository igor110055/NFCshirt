from django.contrib import admin
 
# import the model Todo
from .models import NFTshirt
 
# create a class for the admin-model integration
class CoreAdmin(admin.ModelAdmin):
 
    # add the fields of the model here
    list_display = ('NFT', 'name', 'wallet_address', 'owner')
 
# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class
admin.site.register(NFTshirt ,CoreAdmin)