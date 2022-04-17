from django.contrib import admin
from .models import projects 

# Register your models here.

class projectAdmin(admin.ModelAdmin):

    fields = ('name','desc','img','income')
    list_display =  ('name', 'desc','income')



admin.site.register(projects,projectAdmin)

