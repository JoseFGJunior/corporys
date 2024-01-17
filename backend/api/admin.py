from django.contrib import admin
from .models import Empresa, TipoProduto, ClasseProduto, SubclasseProduto, Produto, SceTipoMovimentacaoEstoque, SceAlmoxarifado, SceMovimentacaoEstoque, SceMovimentacaoEstoqueItem
# Register your models here.


admin.site.register(Empresa)
admin.site.register(TipoProduto)
admin.site.register(ClasseProduto)
admin.site.register(SubclasseProduto)
admin.site.register(Produto)
admin.site.register(SceTipoMovimentacaoEstoque)
admin.site.register(SceAlmoxarifado)
admin.site.register(SceMovimentacaoEstoque)
admin.site.register(SceMovimentacaoEstoqueItem)
