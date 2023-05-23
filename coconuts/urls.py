from django.urls import path
from coconuts import views

# URL conf module - url config
urlpatterns = [
    path('', views.get_pages),
    path('/<str:slug>', views.get_page_by_slug)
]
