from rest_framework import viewsets
from rest_framework.response import Response

from ads.models import Advertise
from ads.serializers import AdvertiseSerializer
import time

class AdvertiseViewSet(viewsets.ModelViewSet):
    queryset = Advertise.objects.all()
    serializer_class = AdvertiseSerializer

    def list(self, request, *args, **kwargs):
        time.sleep(1)
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

