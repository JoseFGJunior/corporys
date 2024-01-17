from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from api.models import SubclasseProduto
from api.serializers import SubclasseProdutoSerializer



class SubclasseProdutoListView(ListAPIView):
    queryset = SubclasseProduto.objects.all()
    serializer_class = SubclasseProdutoSerializer


class SubclasseProdutoDetailView(RetrieveAPIView):
    queryset = SubclasseProduto.objects.all()
    serializer_class = SubclasseProdutoSerializer


class SubclasseProdutoCreateView(CreateAPIView):
    queryset = SubclasseProduto.objects.all()
    serializer_class = SubclasseProdutoSerializer


class SubclasseProdutoUpdateView(UpdateAPIView):
    queryset = SubclasseProduto.objects.all()
    serializer_class = SubclasseProdutoSerializer


class SubclasseProdutoDeleteView(DestroyAPIView):
    queryset = SubclasseProduto.objects.all()
    serializer_class = SubclasseProdutoSerializer

