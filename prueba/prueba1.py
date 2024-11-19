class Prueba:
    def __init__(self, nombre, edad, rol):
        self.nombre = nombre
        self.edad = edad
        self.rol = rol

    def mostrar_informacion(self):
            print(f"Nombre: {self.nombre}, Edad: {self.edad}, rol: {self.rol}")



persona = Prueba ("Juanjo", 18, "back-end")


persona.mostrar_informacion()



