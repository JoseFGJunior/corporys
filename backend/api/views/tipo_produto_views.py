from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from api.models import TipoProduto
from api.serializers import TipoProdutoSerializer



class TipoProdutoListView(ListAPIView):
    queryset = TipoProduto.objects.all()
    serializer_class = TipoProdutoSerializer


class TipoProdutoDetailView(RetrieveAPIView):
    queryset = TipoProduto.objects.all()
    serializer_class = TipoProdutoSerializer


class TipoProdutoCreateView(CreateAPIView):
    queryset = TipoProduto.objects.all()
    serializer_class = TipoProdutoSerializer


class TipoProdutoUpdateView(UpdateAPIView):
    queryset = TipoProduto.objects.all()
    serializer_class = TipoProdutoSerializer


class TipoProdutoDeleteView(DestroyAPIView):
    queryset = TipoProduto.objects.all()
    serializer_class = TipoProdutoSerializer