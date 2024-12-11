from django.db import models


class Kit(models.Model):
    nombre_dia = models.CharField(max_length=100)

    # Día
    descripcion_dia = models.TextField()
    kit_dia = models.JSONField(default=list)
    precio_dia = models.DecimalField(max_digits=10, decimal_places=2)
    beneficios_dia = models.JSONField(default=list)
    img_dia = models.ImageField(upload_to='kits/dia/', null=True, blank=True)

    # Noche
    nombre_noche = models.CharField(max_length=100)
    descripcion_noche = models.TextField()
    kit_noche = models.JSONField(default=list)
    precio_noche = models.DecimalField(max_digits=10, decimal_places=2)
    beneficios_noche = models.JSONField(default=list)
    img_noche = models.ImageField(upload_to='kits/noche/', null=True, blank=True)

    def __str__(self):
        return self.nombre
