from django.db import models

class Meta_Data(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200, null=True, default='')
    heading = models.CharField(max_length=200, null=True, default='')
    image = models.ImageField(null=True, default=None)
    
    def __str__(self):
        return self.title

class Page(models.Model):
    meta_data = models.ForeignKey(Meta_Data, on_delete=models.SET_NULL, null=True)
    slug = models.CharField(max_length=200, default='changeMe')
    published_at = models.DateTimeField(null = True)
    
    def __str__(self):
        return self.slug

class Content_Block(models.Model):
    page = models.ForeignKey(Page, related_name='content_blocks', on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200, default='content')
    published_at = models.DateTimeField(null = True)
    
    def __str__(self):
        return str(self.page) + ' > ' + self.title + ' > ' + str(self.published_at)

class Content_Module(models.Model):
    content = models.ForeignKey(Content_Block, related_name='content_modules', on_delete=models.SET_NULL, null=True)
    moduleType = models.TextChoices('type', 'text image')
    type = models.CharField(choices=moduleType.choices, default='text', max_length=10)
    position = models.IntegerField(unique=True, default=0)
    text_content = models.CharField(max_length=1000, null=True, default=None)
    image_content = models.ImageField(null=True, default=None)
    image_alt = models.CharField(max_length=200, null=True, default='')
    
    def __str__(self):
        return str(self.content) + ' > ' + str(self.type)
