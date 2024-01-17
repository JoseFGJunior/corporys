from django.urls import path
from api.views import classe_produto_views as views

urlpatterns = [
    path('', views.ClasseProdutoListView.as_view(), name='classes-produto'),
    path('create/', views.ClasseProdutoCreateView.as_view(), name='classe-produto-create'),
    path('update/<str:pk>/', views.ClasseProdutoUpdateView.as_view(), name='classe-produto-update'),
    path('delete/<str:pk>/', views.ClasseProdutoDeleteView.as_view(), name='classe-produto-delete'),
    path('<str:pk>/', views.ClasseProdutoDetailView.as_view(), name='classe-produto'),
]