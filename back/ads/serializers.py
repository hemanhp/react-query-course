from rest_framework import serializers
from ads.models import Advertise


class AdvertiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advertise
        fields = ('title', 'description')