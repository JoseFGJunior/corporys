from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from api.models import SceMovimentacaoEstoque
from api.serializers import SceMovimentacaoEstoqueSerializer


class SceMovimentacaoEstoqueListView(ListAPIView):
    queryset = SceMovimentacaoEstoque.objects.all()
    serializer_class = SceMovimentacaoEstoqueSerializer


class SceMovimentacaoEstoqueDetailView(RetrieveAPIView):
    queryset = SceMovimentacaoEstoque.objects.all()
    serializer_class = SceMovimentacaoEstoqueSerializer


class SceMovimentacaoEstoqueCreateView(CreateAPIView):
    queryset = SceMovimentacaoEstoque.objects.all()
    serializer_class = SceMovimentacaoEstoqueSerializer


class SceMovimentacaoEstoqueUpdateView(UpdateAPIView):
    queryset = SceMovimentacaoEstoque.objects.all()
    serializer_class = SceMovimentacaoEstoqueSerializer


class SceMovimentacaoEstoqueDeleteView(DestroyAPIView):
    queryset = SceMovimentacaoEstoque.objects.all()
    serializer_class = SceMovimentacaoEstoqueSerializer
    