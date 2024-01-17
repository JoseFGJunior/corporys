from django.urls import path
from api.views import empresa_views as views

urlpatterns = [
    path('', views.EmpresaListView.as_view(), name='empresas'),
    path('create/', views.EmpresaCreateView.as_view(), name='empresa-create'),
    path('update/<str:pk>/', views.EmpresaUpdateView.as_view(), name='empresa-update'),
    path('delete/<str:pk>/', views.EmpresaDeleteView.as_view(), name='empresa-delete'),
    path('<str:pk>/', views.EmpresaDetailView.as_view(), name='empresa'),
]