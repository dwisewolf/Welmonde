from django.shortcuts import render

def index(request):
    return render(request, 'home.html')

def corona(request):
    return render(request, 'corona.html')
