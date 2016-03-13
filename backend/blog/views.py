from django.shortcuts import render

from rest_framework import viewsets

from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer, PostsSerializer

# Create your views here.


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostsViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostsSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.select_related('user').all()
    serializer_class = CommentSerializer
