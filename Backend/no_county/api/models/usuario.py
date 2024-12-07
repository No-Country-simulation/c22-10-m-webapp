from django.db import models


class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    username = models.CharField(max_length=50, unique=True)
    correo = models.EmailField(unique=True)

    def __str__(self):
        return self.nombre
