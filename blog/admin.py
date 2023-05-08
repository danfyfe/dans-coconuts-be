from django.contrib import admin
from .models import Page, Meta_Data, Content_Block, Content_Module

# Register your models here.
admin.site.register(Meta_Data)
admin.site.register(Page)
admin.site.register(Content_Block)
admin.site.register(Content_Module)