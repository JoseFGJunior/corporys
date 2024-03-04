from django.urls import path
from api.views import sce_tipo_movimentacao_estoque_views as views

urlpatterns = [
    path('', views.SceTipoMovimentacaoEstoqueListView.as_view(), name='tipos-movimentacao-estoque'),
    path('create/', views.SceTipoMovimentacaoEstoqueCreateView.as_view(), name='tipo-movimentacao-estoque-create'),
    path('update/<str:pk>/', views.SceTipoMovimentacaoEstoqueUpdateView.as_view(), name='tipo-movimentacao-estoque-update'),
    path('delete/<str:pk>/', views.SceTipoMovimentacaoEstoqueDeleteView.as_view(), name='tipo-movimentacao-estoque-delete'),
    path('<str:pk>/', views.SceTipoMovimentacaoEstoqueDetailView.as_view(), name='tipo-movimentacao-estoque'),
]
