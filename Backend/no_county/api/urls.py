from django.urls import path
from .views import (
    UsuarioListCreateView, UsuarioRetrieveUpdateDestroyView,
    ProductoListCreateView, ProductoRetrieveUpdateDestroyView,
    PedidoListCreateView, PedidoRetrieveUpdateDestroyView,
    DetallePedidoListCreateView, DetallePedidoRetrieveUpdateDestroyView,
    CategoriaListCreateView, CategoriaRetrieveUpdateDestroyView,
    ReseñaListCreateView, ReseñaRetrieveUpdateDestroyView,
)

urlpatterns = [
    # Usuarios
    path('usuarios/', UsuarioListCreateView.as_view(), name='usuario-list-create'),
    path('usuarios/<int:pk>/', UsuarioRetrieveUpdateDestroyView.as_view(), name='usuario-detail'),

    # Productos
    path('productos/', ProductoListCreateView.as_view(), name='producto-list-create'),
    path('productos/<int:pk>/', ProductoRetrieveUpdateDestroyView.as_view(), name='producto-detail'),

    # Pedidos
    path('pedidos/', PedidoListCreateView.as_view(), name='pedido-list-create'),
    path('pedidos/<int:pk>/', PedidoRetrieveUpdateDestroyView.as_view(), name='pedido-detail'),

    # Detalles del pedido
    path('detalle-pedido/', DetallePedidoListCreateView.as_view(), name='detalle-pedido-list-create'),
    path('detalle-pedido/<int:pk>/', DetallePedidoRetrieveUpdateDestroyView.as_view(), name='detalle-pedido-detail'),

    # Categorías
    path('categorias/', CategoriaListCreateView.as_view(), name='categoria-list-create'),
    path('categorias/<int:pk>/', CategoriaRetrieveUpdateDestroyView.as_view(), name='categoria-detail'),

    # Reseñas
    path('reseñas/', ReseñaListCreateView.as_view(), name='reseña-list-create'),
    path('reseñas/<int:pk>/', ReseñaRetrieveUpdateDestroyView.as_view(), name='reseña-detail'),
]
