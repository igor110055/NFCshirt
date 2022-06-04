from django.shortcuts import render
 
# import view sets from the REST framework
from rest_framework import viewsets
 
# import the TodoSerializer from the serializer file
from .serializers import CoreSerializer
 
# import the Core model from the models file
from .models import NFTshirt
 
# create a class for the Todo model viewsets
class CoreView(viewsets.ModelViewSet):
 
    # create a serializer class and
    # assign it to the TodoSerializer class
    serializer_class = CoreSerializer
 
    # define a variable and populate it
    # with the Todo list objects
    queryset = NFTshirt.objects.all()