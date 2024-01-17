from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from api.models import SceMovimentacaoEstoqueItem
from api.serializers import SceMovimentacaoEstoqueItemSerializer


class SceMovimentacaoEstoqueItemListView(ListAPIView):
    queryset = SceMovimentacaoEstoqueItem.objects.all()
    serializer_class = SceMovimentacaoEstoqueItemSerializer


class SceMovimentacaoEstoqueItemDetailView(RetrieveAPIView):
    queryset = SceMovimentacaoEstoqueItem.objects.all()
    serializer_class = SceMovimentacaoEstoqueItemSerializer


class SceMovimentacaoEstoqueItemCreateView(CreateAPIView):
    queryset = SceMovimentacaoEstoqueItem.objects.all()
    serializer_class = SceMovimentacaoEstoqueItemSerializer


class SceMovimentacaoEstoqueItemUpdateView(UpdateAPIView):
    queryset = SceMovimentacaoEstoqueItem.objects.all()
    serializer_class = SceMovimentacaoEstoqueItemSerializer


class SceMovimentacaoEstoqueItemDeleteView(DestroyAPIView):
    queryset = SceMovimentacaoEstoqueItem.objects.all()
    serializer_class = SceMovimentacaoEstoqueItemSerializer
    