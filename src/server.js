const express = require('express');
const path = require('path');

// Initilizations
const app = express();

// Settings

app.set('port', process.env.PORT || 4000); 
/**
 * `app.set('port', ...)` establece el puerto en el que el servidor escuchará.
 * - `process.env.PORT` es una variable de entorno que normalmente se utiliza cuando se despliega la aplicación en un servidor o en plataformas como Heroku, AWS, etc.
 * - Si no se encuentra la variable de entorno `PORT`, la aplicación usará el puerto `4000` por defecto.
 */

app.set('views', path.join(__dirname, '/views'));
/**
 * `app.set('views', ...)` define la carpeta donde se encuentran las vistas (plantillas HTML o renderizadas).
 * Usamos `path.join(__dirname, '/views')` para asegurarnos de que la ruta es correcta independientemente del sistema operativo.
 * `__dirname` es una variable global que apunta al directorio actual donde se está ejecutando el archivo.
 */

// Middlewares
app.use(express.urlencoded({extended: false}));
/**
 * `express.urlencoded({ extended: false })` es un middleware que permite analizar los datos de formularios con el encoding `application/x-www-form-urlencoded`.
 * - `{ extended: false }` indica que no se permitirá el análisis de objetos anidados en los datos del formulario (usamos el parser de querystring de Node.js).
 */

// Routes
app.get('/', (req, res) => {
    res.send("Hola Mundo");
})

// Static files
app.use(express.static(path.join(__dirname, '/public')));
/**
 * `app.use(express.static(...))` es un middleware que permite servir archivos estáticos desde una carpeta específica.
 * En este caso, la carpeta `public` será utilizada para almacenar archivos estáticos (por ejemplo, imágenes, archivos CSS y JavaScript).
 * Usamos `path.join(__dirname, '/public')` para obtener la ruta correcta de la carpeta `public`, sin importar el sistema operativo.
 * Así, los archivos estáticos estarán disponibles en URLs relativas a la raíz del sitio.
 */

module.exports = app;