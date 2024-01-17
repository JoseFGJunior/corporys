from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from api.models import ClasseProduto
from api.serializers import ClasseProdutoSerializer



class ClasseProdutoListView(ListAPIView):
    queryset = ClasseProduto.objects.all()
    serializer_class = ClasseProdutoSerializer


class ClasseProdutoDetailView(RetrieveAPIView):
    queryset = ClasseProduto.objects.all()
    serializer_class = ClasseProdutoSerializer


class ClasseProdutoCreateView(CreateAPIView):
    queryset = ClasseProduto.objects.all()
    serializer_class = ClasseProdutoSerializer


class ClasseProdutoUpdateView(UpdateAPIView):
    queryset = ClasseProduto.objects.all()
    serializer_class = ClasseProdutoSerializer


class ClasseProdutoDeleteView(DestroyAPIView):
    queryset = ClasseProduto.objects.all()
    serializer_class = ClasseProdutoSerializer


