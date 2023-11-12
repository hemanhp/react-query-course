from rest_framework.routers import SimpleRouter

from ads.views import AdvertiseViewSet, AdvertisePaginatedView

router = SimpleRouter()
router.register('advertises/paged', AdvertisePaginatedView)
router.register('advertises', AdvertiseViewSet)

urlpatterns = [] + router.urls
