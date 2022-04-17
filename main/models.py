from django.db import models

# Create your models here.

class projects(models.Model):

    name = models.CharField(max_length=200)
    img = models.ImageField(upload_to = 'images')
    desc = models.TextField()
    income = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    
    