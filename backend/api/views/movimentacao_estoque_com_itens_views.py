from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.serializers import SceMovimentacaoEstoqueSerializer, SceMovimentacaoEstoqueItemSerializer


class CreateMovimentacaoEstoqueComItens(APIView):
    def post(self, request, *args, **kwargs):
        movimentacao_data = request.data.get('movimentacao_data', {})
        items_data = request.data.get('items_data', [])

        movimentacao_serializer = SceMovimentacaoEstoqueSerializer(data=movimentacao_data)
        if movimentacao_serializer.is_valid():
            movimentacao = movimentacao_serializer.save()

            for item_data in items_data:
                item_data['movimentacao_estoque'] = movimentacao.id
                item_serializer = SceMovimentacaoEstoqueItemSerializer(data=item_data)
                if item_serializer.is_valid():
                    item_serializer.save()
                else:
                    movimentacao.delete()
                    return Response(item_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
            return Response(movimentacao_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(movimentacao_serializer.errors, status=status.HTTP_400_BAD_REQUEST)