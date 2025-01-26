# Etapa 1: Construcción
FROM node:20-bullseye-slim AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json e instala las dependencias
COPY package.json package-lock.json ./

# Instala dependencias necesarias para módulos nativos
RUN apt-get update && apt-get install -y python3 make g++ && \
    npm install && \
    apt-get remove -y python3 make g++ && apt-get autoremove -y && apt-get clean

# Copia todo el código fuente al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa 2: Servidor
FROM nginx:alpine

# Copia los archivos de construcción desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia un archivo de configuración personalizado de Nginx (opcional)
# Si necesitas algo más específico, puedes descomentar y crear un archivo nginx.conf.
# COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80

# Inicia Nginx cuando el contenedor se ejecute
CMD ["nginx", "-g", "daemon off;"]
