from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Empresa, TipoProduto, ClasseProduto, SubclasseProduto, Produto, Cliente, SceMovimentacaoEstoque, SceMovimentacaoEstoqueItem


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'


class TipoProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoProduto
        fields = '__all__'


class ClasseProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClasseProduto
        fields = '__all__'


class SubclasseProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubclasseProduto
        fields = '__all__'


class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = '__all__'
        

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'


class SceMovimentacaoEstoqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = SceMovimentacaoEstoque
        fields = '__all__'


class SceMovimentacaoEstoqueItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = SceMovimentacaoEstoqueItem
        fields = '__all__'

