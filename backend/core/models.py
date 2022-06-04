from django.db import models

# Create your models here.

class NFTshirt(models.Model):
    NFT= models.IntegerField()
    name= models.CharField(max_length=30)
    wallet_address= models.CharField(max_length=256)
    owner= models.CharField(max_length=30)

    def __str__(self):
 
        #it will return the wallet address
        return self.wallet_address

