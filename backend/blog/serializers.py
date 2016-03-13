from rest_framework import serializers

from .models import Post, Comment


class CommentSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username', required=False)

    class Meta:
        model = Comment
        fields = ('id', 'comment', 'created_at', 'updated_at', 'post', 'user', 'username')


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post


class PostsSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username', required=False)
    comment = CommentSerializer(many=True, source='post_comment', required=False)

    class Meta:
        model = Post
        fields = ('id', 'user', 'title', 'description', 'created_at', 'updated_at', 'project', 'comment', 'username')
