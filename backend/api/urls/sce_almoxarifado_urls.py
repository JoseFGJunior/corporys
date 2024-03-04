from django.urls import path
from api.views import sce_almoxarifado_views as views

urlpatterns = [
    path('', views.SceAlmoxarifadoListView.as_view(), name='almoxarifados'),
    path('create/', views.SceAlmoxarifadoCreateView.as_view(), name='almoxarifado-create'),
    path('update/<str:pk>/', views.SceAlmoxarifadoUpdateView.as_view(), name='almoxarifado-update'),
    path('delete/<str:pk>/', views.SceAlmoxarifadoDeleteView.as_view(), name='almoxarifado-delete'),
    path('<str:pk>/', views.SceAlmoxarifadoDetailView.as_view(), name='almoxarifado'),
]