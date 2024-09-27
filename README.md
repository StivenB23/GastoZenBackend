# GastoZen - Backend

Este repositorio contiene el código fuente del backend de **GastoZen**, un aplicativo que permite a los usuarios registrar y categorizar sus gastos de forma eficiente. El backend está desarrollado en **Node.js** con **Express.js** y sigue un patrón de arquitectura por capas para organizar el código de manera clara y mantenible. Utiliza una base de datos **MongoDB** para almacenar la información y está completamente preparado para ser ejecutado en contenedores Docker.

## Estructura del Proyecto

El backend sigue un **patrón por capas**, donde se separan las responsabilidades de la lógica de negocio, controladores, rutas y modelos. A continuación, se describen los directorios principales:


### Descripción de Carpetas

- **routes/**: Aquí se definen las rutas del API, por ejemplo, `/auth`, `/gastos`.
- **controllers/**: Los controladores gestionan las peticiones HTTP, invocando la lógica de negocio desde los servicios.
- **services/**: En esta capa se encuentra la lógica de negocio, que interactúa con los modelos de datos.
- **models/**: Contiene los modelos de MongoDB, definidos mediante Mongoose.
- **middlewares/**: Implementa funciones como la verificación de autenticación JWT y la validación de datos.
- **helpers/**: Funciones comunes que se reutilizan en varias partes del proyecto.
- **jwt/**: Módulo que gestiona la creación y verificación de tokens JWT para la autenticación.
- **config/**: Configuración de la aplicación y la conexión a MongoDB.

## Dependencias Principales

- **Express.js**: Framework para la creación de servidores web.
- **Mongoose**: ODM para interactuar con la base de datos MongoDB.
- **jsonwebtoken**: Librería para la gestión de autenticación JWT.
- **dotenv**: Manejo de variables de entorno.
- **bcryptjs**: Encriptación de contraseñas.
- **Docker**: Para la contenerización y despliegue del backend.
- **nodemon**: Herramienta para el reinicio automático del servidor en desarrollo.

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/gastozen-backend.git
cd gastozen-backend
```

### 2. Configuración de VAriables de Entorno
```
PORT=3300
MONGO_URI=mongodb://<tu_usuario>:<tu_contraseña>@<host>:27017/gastozen
JWT_SECRET=tu_clave_secreta
```
### 3. Instalar Dependencias
```bash
npm install
```

### 3. Iniciar Servidor
```bash
# Modo desarrollo (Nodemon)
npm run dev

# Modo producción
npm start
```

# Docker
Para correr la aaplicación en un entorno docker tenga en cuenta la configuración en los archivos **.dockerignore**, **dockerfile**, **docker-compose.yml**. Posterior a revisar y ajustar lo que considere ejecute el comando:
```bash
docker compose up --build -d
```