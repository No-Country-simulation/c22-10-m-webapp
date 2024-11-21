## !!Backend ecommerce no-country c22-10 m-webapp!!

TECNOLOGIAS UTILIZADAS 

*Python
*Django
*Postman 

## !! Pasos para clonar el codigo con exito !!
1. Descargar python recomendable versiones superiores a la 3.12.0

2. Cuando lo tengas instalado, entra a la consola de tú computador y pon el comando python --version,
   si te reconoce la version que instalaste saltate el paso siguiente

 ## Agregar python a las variables de entorno (path)

 1. Ubica la ruta de instalación de Python y la copias, generalmente está en:

      C:\PythonXX (si lo instalaste manualmente) o
    
      C:\Users\<TuUsuario>\AppData\Local\Programs\Python\PythonXX (si usaste el instalador de Python.org).
    
      Nota: las XX es la versión de Python que instalaste.

2. En el buscador del computador escribe editar las variables de entorno y lo seleccionas, dale click en "Variables de entorno" 
      busca la variable Path y haz click en "Editar".
      
      Haz click en "Nuevo" y agrega.
   
      Pegas la dirreción que copiaste anteriormente y aceptas y guardas los cambios.

4. Vuelve a entrar a la terminan del computador y cuando copies el comando python --version ya te deberia de reconocer la version de       python que instalaste.

5. Para ejecutar el codigo es recomendable descargar PyChram, si no lo instalas en visual studio code instala extenciones de python.

6. Cuando ya tengas el codigo en el entorno de desarrollo utilizaresmos los siguientes comandos desde la terminal de este mismo.

## Ejecutar el proyecto y el servidor de Django y postman

1. Crear y activar un entorno virtual
   python -m venv venv
   .\env\Scripts\activate   

2. Instalar Django y Django REST Framework
    pip install django djangorestframework

3. Verificar la instalación
    python -m django --version

4. Realizar las migraciones de Django
    python manage.py migrate

5. Ejecutar la API
    python manage.py runserver



