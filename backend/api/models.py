from django.db import models

class Empresa(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    razao_social = models.CharField(max_length=100)
    cnpj = models.CharField(max_length=14)
    email = models.CharField(max_length=100)
    telefone = models.CharField(max_length=11)
    cep = models.CharField(max_length=10, null=True, blank=True)
    logradouro = models.CharField(max_length=255, null=True, blank=True)
    numero = models.CharField(max_length=20, null=True, blank=True)
    complemento = models.CharField(max_length=255, null=True, blank=True)
    bairro = models.CharField(max_length=100, null=True, blank=True)
    cidade = models.CharField(max_length=100, null=True, blank=True)
    estado = models.CharField(max_length=50, null=True, blank=True)
    data_cadastro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome


class TipoProduto(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.nome
    

class ClasseProduto(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.nome


class SubclasseProduto(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.nome


class Produto(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    descricao_completa = models.CharField(max_length=255, null=True, blank=True)
    descricao_resumida = models.CharField(max_length=255, null=True, blank=True)
    tipo = models.ForeignKey(TipoProduto, on_delete=models.CASCADE)
    classe = models.ForeignKey(ClasseProduto, on_delete=models.CASCADE)
    subclasse = models.ForeignKey(SubclasseProduto, on_delete=models.CASCADE)
    data_cadastro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome
    

class Cliente(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    cpf = models.CharField(max_length=11, null=True, blank=True)
    cnpj = models.CharField(max_length=14, null=True, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)
    telefone = models.CharField(max_length=11, null=True, blank=True)
    cep = models.CharField(max_length=10, null=True, blank=True)
    logradouro = models.CharField(max_length=255, null=True, blank=True)
    numero = models.CharField(max_length=20, null=True, blank=True)
    complemento = models.CharField(max_length=255, null=True, blank=True)
    bairro = models.CharField(max_length=100, null=True, blank=True)
    cidade = models.CharField(max_length=100, null=True, blank=True)
    estado = models.CharField(max_length=50, null=True, blank=True)
    data_cadastro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome
    


class SceTipoMovimentacaoEstoque(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=255, null=True, blank=True)
    operacao = models.CharField(max_length=1, null=True, blank=True)

    def __str__(self):
        return self.nome
    

class SceAlmoxarifado(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.nome
    

class SceMovimentacaoEstoque(models.Model):
    id = models.AutoField(primary_key=True)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    almoxarifado = models.ForeignKey(SceAlmoxarifado, on_delete=models.CASCADE)
    tipo_movimentacao = models.ForeignKey(SceTipoMovimentacaoEstoque, on_delete=models.CASCADE)
    descricao = models.CharField(max_length=255, null=True, blank=True)
    data_movimentacao = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return str(self.id)
    

class SceMovimentacaoEstoqueItem(models.Model):
    id = models.AutoField(primary_key=True)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    movimentacao_estoque = models.ForeignKey(SceMovimentacaoEstoque, on_delete=models.CASCADE)
    quantidade = models.IntegerField()
    valor_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    custo = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return str(self.id)
    

class SceSaldoEstoque(models.Model):
    id = models.AutoField(primary_key=True)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    almoxarifado = models.ForeignKey(SceAlmoxarifado, on_delete=models.CASCADE)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    quantidade_estoque = models.IntegerField()
    custo_produto = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return str(self.id)
    

class SftFormaPagamento(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.nome
    

class SftPedido(models.Model):
    id = models.AutoField(primary_key=True)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    forma_pagamento = models.ForeignKey(SftFormaPagamento, on_delete=models.CASCADE)
    data_emissao = models.DateTimeField(auto_now_add=True)
    valor_total = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.id

class SftVendaItem(models.Model):
    id = models.AutoField(primary_key=True)
    pedido = models.ForeignKey(SftPedido, on_delete=models.CASCADE)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade = models.IntegerField()
    custo = models.DecimalField(max_digits=10, decimal_places=2)
    valor_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    valor_total = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.id