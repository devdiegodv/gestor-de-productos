const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');

// Initilizations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000); // Si no se encuentra la variable de entorno `PORT`, la aplicación usará el puerto `4000` por defecto.
app.set('views', path.join(__dirname, '/views')); // define la carpeta donde se encuentran las vistas

// Configura el motor de plantillas Handlebars con extensión .hbs
app.engine('.hbs', exphbs.engine({
    // Define el nombre del layout por defecto
    defaultLayout: 'main', // 'main' es el layout que envolverá todas las vistas
    // Especifica la carpeta donde se encuentran los layouts
    layoutsDir: path.join(app.get('views'), 'layouts'),
    // Especifica la carpeta donde se encuentran los partials (vistas parciales)
    partialsDir: path.join(app.get('views'), 'partials'),
    // Establece la extensión de los archivos de plantilla como .hbs
    extname: '.hbs' // Todos los archivos de plantilla serán .hbs
}));
app.set('view engine', '.hbs');

// Configura express para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Middlewares
app.use(methodOverride('_method')); // para usar métodos http como DELETE y PUT en formularios HTML
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
/**
 * `express.urlencoded({ extended: false })` es un middleware que permite analizar los datos de formularios con el encoding `application/x-www-form-urlencoded`.
 * - `{ extended: false }` indica que no se permitirá el análisis de objetos anidados en los datos del formulario (usamos el parser de querystring de Node.js).
 */

// Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))

module.exports = app;