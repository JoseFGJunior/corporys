from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from api.models import SceAlmoxarifado
from api.serializers import SceAlmoxarifadoSerializer


class SceAlmoxarifadoListView(ListAPIView):
    queryset = SceAlmoxarifado.objects.all()
    serializer_class = SceAlmoxarifadoSerializer


class SceAlmoxarifadoDetailView(RetrieveAPIView):
    queryset = SceAlmoxarifado.objects.all()
    serializer_class = SceAlmoxarifadoSerializer


class SceAlmoxarifadoCreateView(CreateAPIView):
    queryset = SceAlmoxarifado.objects.all()
    serializer_class = SceAlmoxarifadoSerializer


class SceAlmoxarifadoUpdateView(UpdateAPIView):
    queryset = SceAlmoxarifado.objects.all()
    serializer_class = SceAlmoxarifadoSerializer


class SceAlmoxarifadoDeleteView(DestroyAPIView):
    queryset = SceAlmoxarifado.objects.all()
    serializer_class = SceAlmoxarifadoSerializer

