import json
import os

# Obtener el directorio actual
current_directory = os.path.basename(os.getcwd())

# Leer el archivo package.json existente
with open('package.json', 'r') as file:
    data = json.load(file)

# Modificaciones
data["homepage"] = f"https://casselilayza.github.io/{current_directory}"
data["scripts"]["predeploy"] = "npm run build"
data["scripts"]["deploy"] = "gh-pages -d build"

# Guardar el archivo JSON modificado
with open('package.json', 'w') as file:
    json.dump(data, file, indent=2)

print(f"El archivo package.json ha sido actualizado con el homepage: https://casselilayza.github.io/{current_directory}")
