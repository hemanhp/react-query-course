from rest_framework.routers import SimpleRouter

from ads.views import AdvertiseViewSet

router = SimpleRouter()
router.register('advertises', AdvertiseViewSet)

urlpatterns = [] + router.urls
