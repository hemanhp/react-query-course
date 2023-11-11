from rest_framework import viewsets
from rest_framework.response import Response
import django_filters.rest_framework
from ads.models import Advertise
from ads.serializers import AdvertiseSerializer
import time


class AdvertiseViewSet(viewsets.ModelViewSet):
    queryset = Advertise.objects.all()
    serializer_class = AdvertiseSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['ad_type']

