from django.contrib import admin
from django.urls import path,include,re_path
from django.views.generic import TemplateView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')), #by default when using djoser
    path('auth/', include('djoser.urls.jwt')), #for using jwt with djoser
    path('auth/', include('djoser.social.urls')), #for social auth
    path('auth/', include('social_django.urls', namespace='social')),
]

# managing redirect to react
urlpatterns += [re_path(r'^.*',TemplateView.as_view(template_name="index.html"))]


#What is Djoser
# REST implementation of Django authentication system. djoser library provides a set of Django Rest Framework views to handle basic actions suchas 
# registration, login, logout, password reset and account activation. It works with custom user model.