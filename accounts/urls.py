from rest_framework import routers
from .views import AuthViewset


auth_router = routers.SimpleRouter()

auth_router.register('auth', AuthViewset)


urlpatterns = auth_router.urls