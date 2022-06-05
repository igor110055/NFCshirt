from django.shortcuts import render
 
# import view sets from the REST framework
from rest_framework.response import Response
from rest_framework.views import APIView

# import the TodoSerializer from the serializer file
from .serializers import CoreSerializer
 
# import the Core model from the models file
from .models import NFTshirt
 
# create a class for the Todo model viewsets
class CoreView(APIView):
 
    # create a serializer class and
    # assign it to the TodoSerializer class
    serializer_class = CoreSerializer
 
    def get(self, request):
        #'NFT', 'name', 'wallet_address', 'owner')
        detail = [ {"NFT": detail.NFT, "name": detail.name, "Wallet_address": detail.Wallet_address, "owner": detail.owner } 
        for detail in NFTshirt.objects.all()]
        return Response(detail)
  
    def post(self, request):
  
        serializer = CoreSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)