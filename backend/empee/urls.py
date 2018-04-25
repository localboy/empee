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
# from django.views.generic.base import TemplateView

from rest_framework import routers

from .views import IndexView
from users.views import AccountViewSet, LoginView, UserView, UserProfileView, ChangePassword, ForgetPassword, ResetPassword
from projects.views import ProjectViewSet
from teams.views import TeamViewSets, TemMemberViewSets
from blog.views import PostViewSet, CommentViewSet, PostsViewSet

router = routers.DefaultRouter()
router.register(r'account', AccountViewSet)
router.register(r'comment', CommentViewSet)
router.register(r'user', UserView)
router.register(r'userprofile', UserProfileView)
router.register(r'project', ProjectViewSet)
router.register(r'post', PostViewSet)
router.register(r'posts', PostsViewSet)
router.register(r'team', TeamViewSets)
router.register(r'teammember', TemMemberViewSets)

urlpatterns = [
    # url(r'^$', TemplateView.as_view(template_name='index.html'), name="index"),
    # url(r'^$', IndexView.as_view(), name='index'),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api/login/$', LoginView.as_view(), name='login'),
    url(r'^api/change-password/$', ChangePassword.as_view(), name='change_password'),
    url(r'^api/forget-password/$', ForgetPassword.as_view(), name='forget_password'),
    url(r'^api/reset-password/$', ResetPassword.as_view(), name='reset_password'),
    url(r'^api-token-auth/', 'rest_framework_jwt.views.obtain_jwt_token'),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
