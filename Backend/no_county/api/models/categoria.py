from django.db import models

class Categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True)
    tipo_de_producto = models.CharField(max_length=100)

    def __str__(self):
        return self.tipo_de_producto
