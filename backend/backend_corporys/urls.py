"""
URL configuration for backend_corporys project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/tipos-produto/', include('api.urls.tipo_produto_urls')),
    path('api/classes-produto/', include('api.urls.classe_produto_urls')),
    path('api/subclasses-produto/', include('api.urls.subclasse_produto_urls')),
    path('api/produtos/', include('api.urls.produto_urls')),
    path('api/empresas/', include('api.urls.empresa_urls')),
    path('api/users/', include('api.urls.user_urls')),
    path('api/clientes/', include('api.urls.cliente_urls')),
    path('api/movimentacoes-estoque-items/', include('api.urls.movimentacao_estoque_com_items_urls')),
]
