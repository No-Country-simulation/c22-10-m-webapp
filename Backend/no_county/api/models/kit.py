from django.db import models

class Kit(models.Model):
    id_kit = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    dia = models.JSONField(default=lambda: {
        "img": "",
        "kit": {"p1": "", "p2": "", "p3": "", "p4": ""},
        "parrafo": ""
    })
    noche = models.JSONField(default=lambda: {
        "img": "",
        "kit": {"p1": "", "p2": "", "p3": "", "p4": ""},
        "parrafo": ""
    })
    imagen = models.ImageField(upload_to='productos/', null=False, blank=False)

    def __str__(self):
        return self.nombre
