from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from api.models import Empresa
from api.serializers import EmpresaSerializer



class EmpresaListView(ListAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer


class EmpresaDetailView(RetrieveAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer


class EmpresaCreateView(CreateAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer


class EmpresaUpdateView(UpdateAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer


class EmpresaDeleteView(DestroyAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer