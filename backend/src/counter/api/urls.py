
from counter.api.views import CounterViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', CounterViewSet, basename='counter')
urlpatterns = router.urls

