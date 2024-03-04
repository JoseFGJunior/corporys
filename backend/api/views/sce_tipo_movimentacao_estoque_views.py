from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from api.models import SceTipoMovimentacaoEstoque
from api.serializers import SceTipoMovimentacaoEstoqueSerializer


class SceTipoMovimentacaoEstoqueListView(ListAPIView):
    queryset = SceTipoMovimentacaoEstoque.objects.all()
    serializer_class = SceTipoMovimentacaoEstoqueSerializer


class SceTipoMovimentacaoEstoqueDetailView(RetrieveAPIView):
    queryset = SceTipoMovimentacaoEstoque.objects.all()
    serializer_class = SceTipoMovimentacaoEstoqueSerializer


class SceTipoMovimentacaoEstoqueCreateView(CreateAPIView):
    queryset = SceTipoMovimentacaoEstoque.objects.all()
    serializer_class = SceTipoMovimentacaoEstoqueSerializer


class SceTipoMovimentacaoEstoqueUpdateView(UpdateAPIView):
    queryset = SceTipoMovimentacaoEstoque.objects.all()
    serializer_class = SceTipoMovimentacaoEstoqueSerializer


class SceTipoMovimentacaoEstoqueDeleteView(DestroyAPIView):
    queryset = SceTipoMovimentacaoEstoque.objects.all()
    serializer_class = SceTipoMovimentacaoEstoqueSerializer

