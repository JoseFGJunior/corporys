from django.urls import path
from api.views import produto_views as views

urlpatterns = [
    path('', views.ProdutoListView.as_view(), name='produtos'),
    path('create/', views.ProdutoCreateView.as_view(), name='produto-create'),
    path('update/<str:pk>/', views.ProdutoUpdateView.as_view(), name='produto-update'),
    path('delete/<str:pk>/', views.ProdutoDeleteView.as_view(), name='produto-delete'),
    path('<str:pk>/', views.ProdutoDetailView.as_view(), name='produto'),
]