from django.shortcuts import render
from blog.models import Page
from blog.serializers import AllPagesSerializer, PageSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json

@api_view(['GET', 'POST'])
def get_pages(request):
    if (request.method == 'GET'):
        all_pages = Page.objects.all()
        serializer_all_pages = AllPagesSerializer(all_pages, many=True)
        return Response(serializer_all_pages.data)
    if (request.method == 'POST'):
        return Response({'hi': 'sup'})

@api_view(['GET'])
def get_page_by_slug(request, slug):
    page = Page.objects.filter(slug=slug).first()
    if page:
        serializer_page = PageSerializer(page)
        print(serializer_page)
        
        return Response(serializer_page.data)

    return Response({
        'status': 404,
        'error': 'Page Not Found'
    })