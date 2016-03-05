from rest_framework import serializers

from .models import Post, Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment


class PostSerializer(serializers.ModelSerializer):
    comment = CommentSerializer(many=True, source='post_comment', required=False)

    class Meta:
        model = Post
        fields = ('id', 'user', 'title', 'description', 'created_at', 'updated_at', 'project', 'comment')
