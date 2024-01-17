from django.urls import path
from api.views import movimentacao_estoque_com_itens_views as views


urlpatterns = [
    path('create/', views.CreateMovimentacaoEstoqueComItens.as_view(), name="create_movimentacao_estoque_com_itens"),
] 