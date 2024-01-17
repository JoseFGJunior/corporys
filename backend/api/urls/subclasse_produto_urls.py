from django.urls import path
from api.views import subclasse_produto_views as views

urlpatterns = [
    path('', views.SubclasseProdutoListView.as_view(), name='subclasses-produto'),
    path('create/', views.SubclasseProdutoCreateView.as_view(), name='subclasse-produto-create'),
    path('update/<str:pk>/', views.SubclasseProdutoUpdateView.as_view(), name='subclasse-produto-update'),
    path('delete/<str:pk>/', views.SubclasseProdutoDeleteView.as_view(), name='subclasse-produto-delete'),
    path('<str:pk>/', views.SubclasseProdutoDetailView.as_view(), name='subclasse-produto'),
]