# Sistema de Gestión de Clientes

Frontend de la aplicación de gestión de clientes y propiedades, construido con Next.js.

## Requisitos

- Node.js 18 o superior
- npm
- Backend corriendo localmente (ver instrucciones del repositorio del backend)

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/FelipeSrojas96/frontend_lidz.git
cd frontend_lidz
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env.local` en la raíz del proyecto con la URL del backend:

```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

> Cambia el puerto si tu backend corre en uno diferente.

## Correr en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3001](http://localhost:3001) en tu navegador.

> El frontend corre en el puerto 3001 por defecto para no colisionar con el backend en el 3000.

## Build de producción

```bash
npm run build
npm start
```
