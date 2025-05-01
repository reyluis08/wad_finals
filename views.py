from django.shortcuts import render

def welcome(request):
    return render(request, 'core/welcome.html')

def needhelp(request):
    return render(request, 'core/needhelp.html')

def music(request):
    return render(request, 'core/music.html')

def menu(request):
    return render(request, 'core/menu.html')

def home(request):
    return render(request, 'core/home.html')

def cart(request):
    return render(request, 'core/cart.html')

def about_us(request):
    return render(request, 'core/about_us.html')
