from django.shortcuts import render

# Create your views here
from rest_framework import generics
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Usuario, Producto, Pedido, DetallePedido, Categoria, Reseña
from .serializers import UsuarioSerializer, ProductoSerializer, PedidoSerializer, DetallePedidoSerializer, CategoriaSerializer, ReseñaSerializer

# Usuario
class UsuarioListCreateView(ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class UsuarioRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

# Producto
class ProductoListCreateView(ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ProductoRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

# Pedido
class PedidoListCreateView(ListCreateAPIView):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer

class PedidoRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer

# DetallePedido
class DetallePedidoListCreateView(ListCreateAPIView):
    queryset = DetallePedido.objects.all()
    serializer_class = DetallePedidoSerializer

class DetallePedidoRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = DetallePedido.objects.all()
    serializer_class = DetallePedidoSerializer

# Categoría
class CategoriaListCreateView(ListCreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class CategoriaRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

# Reseña
class ReseñaListCreateView(ListCreateAPIView):
    queryset = Reseña.objects.all()
    serializer_class = ReseñaSerializer

class ReseñaRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Reseña.objects.all()
    serializer_class = ReseñaSerializer

