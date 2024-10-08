import requests
from urllib.parse import quote
from PIL import Image
from io import BytesIO
import os

# Función para generar el QR y guardar en PNG en la carpeta especificada
def generar_qr(url, nombre_archivo, carpeta_destino):
    # Codificar (encode) la URL
    url_codificada = quote(url)
    
    # Crear la URL completa para la API
    api_url = f"https://api.qrserver.com/v1/create-qr-code/?size=800x800&data={url_codificada}"
    
    # Hacer la solicitud GET para obtener el código QR
    respuesta = requests.get(api_url)
    
    # Abrir la imagen desde la respuesta
    img = Image.open(BytesIO(respuesta.content))
    
    # Convertir a RGBA para quitar el fondo
    img = img.convert("RGBA")
    datas = img.getdata()

    # Crear una nueva lista de datos para la imagen sin fondo
    nueva_img = []
    for item in datas:
        # Cambiar el fondo blanco a transparente
        if item[:3] == (255, 255, 255):  # Si es blanco
            nueva_img.append((255, 255, 255, 0))  # Hacer transparente
        else:
            nueva_img.append(item)

    # Actualizar los datos de la imagen
    img.putdata(nueva_img)

    # Verificar si la carpeta de destino existe, si no, crearla
    if not os.path.exists(carpeta_destino):
        os.makedirs(carpeta_destino)

    # Construir la ruta completa del archivo
    ruta_completa = os.path.join(carpeta_destino, f"{nombre_archivo}.png")

    # Guardar la imagen en la ruta especificada
    img.save(ruta_completa, "PNG")

    print(f"El código QR se ha guardado en: {ruta_completa}")

# URL que deseas convertir a QR
url = "https://www.ejemplo.com"
# Nombre del archivo a guardar
nombre_archivo = "codigo_qr_sin_fondo"

# Carpeta donde se guardará el archivo (usa raw string o doble barra invertida)
# carpeta_destino = r"C:\Users\usuario\Downloads\QR"
carpeta_destino = "./"

# Llamar a la función
generar_qr(url, nombre_archivo, carpeta_destino)
