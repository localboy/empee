"""empee URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin

from rest_framework import routers

from .views import IndexView
from users.views import AccountViewSet, LoginView
from projects.views import ProjectViewSet
from blog.views import PostViewSet

router = routers.DefaultRouter()
router.register(r'account', AccountViewSet)
# router.register(r'user', UserView)
router.register(r'project', ProjectViewSet)
router.register(r'post', PostViewSet)

urlpatterns = [
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api/login/$', LoginView.as_view(), name='login'),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
