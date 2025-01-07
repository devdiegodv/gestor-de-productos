# Gestor de Productos para el Hogar

Este proyecto es una aplicación web para gestionar y organizar productos necesarios para el hogar. Permite a los usuarios crear cuentas, iniciar sesión y administrar sus propias listas de compras. Cada usuario tiene acceso a sus propias "notas", donde puede seleccionar productos desde una lista predefinida y llevar un registro de los artículos que necesita comprar.

## Tecnologías utilizadas

- **Node.js**: Backend construido con Node.js, proporcionando una estructura eficiente y escalable para manejar las solicitudes del usuario y la lógica de la aplicación.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar de forma flexible los datos de los usuarios, notas y productos seleccionados.
- **Express.js**: Framework para Node.js, utilizado para gestionar las rutas y facilitar la creación del servidor.
- **HTML, CSS y JavaScript**: Tecnologías utilizadas para el frontend y la interfaz de usuario.
- **Bootstrap 5**: Framework CSS para el diseño y la creación de interfaces modernas, responsivas y adaptables a diferentes tamaños de pantalla. Se ha utilizado para mejorar la apariencia y la usabilidad de la aplicación sin depender de jQuery.
- **FontAwesome**: Librería de iconos que permite añadir iconos vectoriales escalables y personalizables a la aplicación web.

## Módulos de npm utilizados

El proyecto utiliza los siguientes módulos de npm para gestionar las funcionalidades de la aplicación:

- **express**: Framework web para Node.js que facilita la creación de aplicaciones y el manejo de rutas.
- **connect-flash**: Módulo para mostrar mensajes flash (mensajes temporales) a los usuarios, como notificaciones de éxito o error.
- **bcryptjs**: Biblioteca para encriptar contraseñas de forma segura.
- **express-handlebars**: Motor de plantillas para generar vistas HTML dinámicas en el frontend.
- **express-session**: Middleware para gestionar las sesiones de usuario, permitiendo que los usuarios inicien sesión y mantengan su sesión activa.
- **method-override**: Middleware que permite usar métodos HTTP como PUT o DELETE en formularios que solo soportan POST o GET.
- **mongoose**: Biblioteca de modelado de datos para MongoDB, que facilita la interacción con la base de datos y la definición de esquemas.
- **passport**: Middleware para la autenticación de usuarios, permitiendo diversas estrategias de autenticación.
- **passport-local**: Estrategia de autenticación local para usar nombre de usuario y contraseña en el inicio de sesión.
- **dotenv**: Módulo para cargar variables de entorno desde un archivo `.env`, permitiendo gestionar de forma segura claves y configuraciones sensibles en el proyecto.
- **nodemon**: Herramienta que reinicia automáticamente el servidor de desarrollo cuando se realizan cambios en los archivos del proyecto, facilitando el proceso de desarrollo.
- **npm-check-updates**: Herramienta que permite actualizar las dependencias del `package.json` a la última versión disponible de forma fácil, ayudando a mantener las dependencias del proyecto actualizadas.

## Características principales

- **Registro e ingreso de usuarios**: Los usuarios pueden crear una cuenta y acceder a su perfil personalizado para gestionar sus notas de compra.
- **Notas personalizadas**: Cada usuario puede crear y editar notas con productos seleccionados desde una lista categorizada de productos necesarios para el hogar (supermercado, limpieza, etc.).
- **Selección de productos**: Una lista de productos predefinidos permite seleccionar los artículos que el usuario desea agregar a sus notas.
- **Interfaz sencilla y amigable**: Fácil de usar, con una experiencia de usuario intuitiva para agregar, editar y revisar productos en las notas.
- **Seguridad**: Implementación de funcionalidades básicas de seguridad para proteger las cuentas de usuario, incluyendo el cifrado de contraseñas con **bcryptjs** y autenticación segura con **passport**.

## ¿Cómo funciona?

1. Los usuarios se registran con un nombre de usuario y una contraseña.
2. Una vez registrados, pueden iniciar sesión para acceder a sus notas personales.
3. Los usuarios pueden seleccionar productos de una lista y agregarlos a una nueva nota o lista de compras.
4. Cada cuenta mantiene un historial de sus notas y productos seleccionados, permitiendo organizar y revisar las compras de forma sencilla.

## Instrucciones de configuración

Antes de ejecutar el proyecto, es necesario configurar las variables de entorno. Para ello:

1. **Crea un archivo `.env`** en la raíz del proyecto.
2. Define las siguientes variables en el archivo `.env`:

   ```env
   MULTIGESTOR_MONGODB_HOST=127.0.0.1
   MULTIGESTOR_MONGODB_PORT=27017
   MULTIGESTOR_MONGODB_DATABASE=gestor-de-productos

## Hecho por

**Diego Donoso Vera**
