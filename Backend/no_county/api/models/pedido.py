from datetime import datetime

from django.db import models

class Pedido(models.Model):
    id_pedido = models.AutoField(primary_key=True)
    fecha_orden = models.DateTimeField(default=datetime.now)
    precio_total = models.DecimalField(max_digits=10, decimal_places=2)
    metodo_de_pago = models.CharField(max_length=50)

    def __str__(self):
        return f"Pedido {self.id_pedido}"
