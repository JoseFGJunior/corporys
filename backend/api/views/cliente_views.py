from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from api.models import Cliente
from api.serializers import ClienteSerializer



class ClienteListView(ListAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer


class ClienteDetailView(RetrieveAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer


class ClienteCreateView(CreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer


class ClienteUpdateView(UpdateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer


class ClienteDeleteView(DestroyAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer


