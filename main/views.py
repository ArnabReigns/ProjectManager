from django.shortcuts import render
from requests import request
from .models import projects

# Create your views here.

def home(request):

    hi =  projects.objects.all()
    return render(request, 'home.html', {'projects':hi})
