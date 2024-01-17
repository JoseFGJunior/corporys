from django.urls import path
from api.views import cliente_views as views

urlpatterns = [
    path('', views.ClienteListView.as_view(), name='clientes'),
    path('create/', views.ClienteCreateView.as_view(), name='cliente-create'),
    path('update/<str:pk>/', views.ClienteUpdateView.as_view(), name='cliente-update'),
    path('delete/<str:pk>/', views.ClienteDeleteView.as_view(), name='cliente-delete'),
    path('<str:pk>/', views.ClienteDetailView.as_view(), name='cliente'),
]