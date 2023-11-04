from django.db import models


# Create your models here.
class Advertise(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title