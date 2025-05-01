from django.urls import path
from django.views.generic import RedirectView
from . import views

urlpatterns = [
    path('', RedirectView.as_view(url='welcome.html', permanent=False)),
    path('home.html', views.home, name='home'),                # home.html
    path('about_us.html', views.about_us, name='about'),     # about_us.html
    path('menu.html', views.menu, name='menu'),           # menu.html
    path('cart.html', views.cart, name='cart'),           # cart.html
    path('music.html', views.music, name='music'),        # music.html
    path('needhelp.html', views.needhelp, name='needhelp'), # needhelp.html
    path('welcome.html', views.welcome, name='welcome'),  # welcome.html
]