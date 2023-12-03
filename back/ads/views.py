from rest_framework import viewsets
from rest_framework import pagination
from rest_framework.response import Response
import django_filters.rest_framework
from ads.models import Advertise
from ads.serializers import AdvertiseSerializer
import time
from rest_framework import filters


class AdvertiseViewSet(viewsets.ModelViewSet):
    queryset = Advertise.objects.all()
    serializer_class = AdvertiseSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['ad_type']
    pagination_class = None

    def retrieve(self, request, *args, **kwargs):
        time.sleep(5)
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class AdvertisePaginatedView(viewsets.ReadOnlyModelViewSet):
    queryset = Advertise.objects.all()
    serializer_class = AdvertiseSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['ad_type']
    search_fields = ['title',]


    def retrieve(self, request, *args, **kwargs):
        time.sleep(2)
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    def list(self, request, *args, **kwargs):
        # time.sleep(1)
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
