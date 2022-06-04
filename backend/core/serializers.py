# import serializers from the REST framework
from rest_framework import serializers
 
# import the todo data model
from .models import NFTshirt
 
# create a serializer class
class CoreSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = NFTshirt
        fields = ('id','NFT', 'name', 'wallet_address', 'owner')