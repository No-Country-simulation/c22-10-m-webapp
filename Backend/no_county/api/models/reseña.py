from django.db import models
from .usuario import Usuario

class Reseña(models.Model):
    id_reseña = models.AutoField(primary_key=True)
    comentario = models.TextField()
    valoracion = models.IntegerField()
    fecha_comentario = models.DateField()
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.comentario} ({self.valoracion}/5)"
