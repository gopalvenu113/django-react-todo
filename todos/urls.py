from rest_framework import routers
from .views import TodoViewset


router = routers.SimpleRouter()
router.register('todos', TodoViewset)

urlpatterns = router.urls