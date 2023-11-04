from django.contrib import admin

from ads.models import Advertise


# Register your models here.
@admin.register(Advertise)
class AdvertiseAdmin(admin.ModelAdmin):
    pass