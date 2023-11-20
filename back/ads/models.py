from django.db import models


# Create your models here.
class Advertise(models.Model):
    class AdvertiseType(models.TextChoices):
        sell = 'sell'
        buy = 'buy'
    ad_type = models.CharField(max_length=16, choices=AdvertiseType.choices, default=AdvertiseType.sell)
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(null=True, blank=True)
    price = models.IntegerField(null=True,blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title