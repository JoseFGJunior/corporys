from django.urls import path
from api.views import tipo_produto_views as views

urlpatterns = [
    path('', views.TipoProdutoListView.as_view(), name='tipos-produto'),
    path('create/', views.TipoProdutoCreateView.as_view(), name='tipo-produto-create'),
    path('update/<str:pk>/', views.TipoProdutoUpdateView.as_view(), name='tipo-produto-update'),
    path('delete/<str:pk>/', views.TipoProdutoDeleteView.as_view(), name='tipo-produto-delete'),
    path('<str:pk>/', views.TipoProdutoDetailView.as_view(), name='tipo-produto'),
]