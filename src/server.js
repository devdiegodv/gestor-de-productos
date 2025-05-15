const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

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
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(methodOverride('_method')); // para usar métodos http como DELETE y PUT en formularios HTML
app.use(morgan('dev'));
/**
 * `express.urlencoded({ extended: false })` es un middleware que permite analizar los datos de formularios con el encoding `application/x-www-form-urlencoded`.
 * - `{ extended: false }` indica que no se permitirá el análisis de objetos anidados en los datos del formulario (usamos el parser de querystring de Node.js).
 */
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'mysecret', // Clave secreta para firmar la sesión
    resave: true, // Fuerza a guardar la sesión en cada solicitud, incluso si no ha habido cambios
    saveUninitialized: true // Guarda una sesión nueva incluso si no ha sido inicializada
}));
app.use(flash()); // Middleware para mostrar mensajes flash

app.use((req, res, next) => {
    // Middleware para pasar variables locales a todas las vistas
    res.locals.success_msg = req.flash('success_msg'); // Mensajes de éxito
    res.locals.error_msg = req.flash('error_msg'); // Mensajes de error
    next(); // Llama al siguiente middleware o ruta
});

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));

module.exports = app;