from django.shortcuts import render

from rest_framework import viewsets

from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer

# Create your views here.


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.select_related('user').all()
    serializer_class = CommentSerializer