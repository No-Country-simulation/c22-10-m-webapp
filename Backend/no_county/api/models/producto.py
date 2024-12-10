from django.db import models
from .categoria import Categoria

class Producto(models.Model):
    id_producto = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    descripcion = models.TextField()
    ingredientes = models.JSONField(default=list)
    beneficios = models.JSONField(default=list)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, related_name="productos")
    imagen = models.ImageField(upload_to='productos/', null=False, blank=False)

    def __str__(self):
        return self.nombre


