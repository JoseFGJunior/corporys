from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from api.models import Produto
from api.serializers import ProdutoSerializer


class ProdutoListView(ListAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer


class ProdutoDetailView(RetrieveAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer


class ProdutoCreateView(CreateAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer


class ProdutoUpdateView(UpdateAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer


class ProdutoDeleteView(DestroyAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer