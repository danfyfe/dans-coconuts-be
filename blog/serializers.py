from rest_framework import serializers
from blog.models import Page, Meta_Data, Content_Block, Content_Module

class Meta_DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meta_Data
        fields = ['title', 'description', 'heading']
        
class Content_ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content_Module
        fields = ['id', 'type', 'position', 'text_content', 'image_content', 'image_alt']

class Content_BlockSerializer(serializers.ModelSerializer):
    content_modules = Content_ModuleSerializer(many=True, read_only=True)

    class Meta:
        model = Content_Block
        fields = ['id', 'title', 'published_at', 'page', 'content_modules']

class AllPagesSerializer(serializers.ModelSerializer):
    meta_data = Meta_DataSerializer()

    class Meta:
        model = Page
        fields = ['id', 'meta_data', 'slug', 'published_at']
        

class PageSerializer(serializers.ModelSerializer):
    meta_data = Meta_DataSerializer()
    content_blocks = Content_BlockSerializer(many=True, read_only=True)

    class Meta:
        model = Page
        depth = 10
        fields = ['id', 'meta_data', 'slug', 'published_at', 'content_blocks']