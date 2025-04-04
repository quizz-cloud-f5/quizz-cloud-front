# Etapa 1: Construcción
FROM node:20-bullseye-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN apt-get update && apt-get install -y python3 make g++ && \
    npm install && \
    apt-get remove -y python3 make g++ && apt-get autoremove -y && apt-get clean

COPY . .

# 💡 Esta es la clave:
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

# 👉 Ejecuta el build con la variable
RUN npm run build

# Etapa 2: Servidor
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
