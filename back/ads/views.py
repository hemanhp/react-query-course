from rest_framework import viewsets
from ads.models import Advertise
from ads.serializers import AdvertiseSerializer


class AdvertiseViewSet(viewsets.ModelViewSet):
    queryset = Advertise.objects.all()
    serializer_class = AdvertiseSerializer
