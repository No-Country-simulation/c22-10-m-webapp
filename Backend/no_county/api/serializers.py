from rest_framework import serializers
from .models import Usuario, Producto, Pedido, DetallePedido, Categoria, Reseña

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class PedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedido
        fields = '__all__'

class DetallePedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetallePedido
        fields = '__all__'

class CategoriaSerializer(serializers.ModelSerializer):
    productos = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Categoria
        fields = '__all__'

class ReseñaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reseña
        fields = '__all__'
