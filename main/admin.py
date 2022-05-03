from django.contrib import admin
from .models import project 

# Register your models here.

class projectAdmin(admin.ModelAdmin):

    fields = ('name','desc','img','income')
    list_display =  ('name', 'desc','income')
    search_fields = ['name','income']



admin.site.register(project,projectAdmin)

