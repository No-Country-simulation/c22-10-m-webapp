from django.db import models
from .pedido import Pedido

class DetallePedido(models.Model):
    id_detalle_pedido = models.AutoField(primary_key=True)
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    cantidad_de_producto = models.IntegerField()
    tipo_de_producto = models.CharField(max_length=100)
    direccion = models.TextField()
    correo = models.EmailField()
    numero_de_telefono = models.CharField(max_length=15)

    def __str__(self):
        return f"Detalle {self.id_detalle_pedido} del Pedido {self.pedido.id_pedido}"
