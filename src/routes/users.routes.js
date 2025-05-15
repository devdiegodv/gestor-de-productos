// Importa el módulo Router de Express
const { Router } = require('express');
const router = Router();

// Importa los controladores de usuario
const { 
    renderSignupForm, 
    renderSigninForm, 
    signup, 
    signin, 
    logout 
} = require('../controllers/users.controller');

// Rutas para el registro, inicio de sesión y cierre de sesión de usuarios

// Muestra el formulario de registro
router.get('/usuarios/registro', renderSignupForm);

// Procesa el registro de usuario
router.post('/users/signup', signup);

// Muestra el formulario de inicio de sesión
router.get('/usuarios/ingreso', renderSigninForm);

// Procesa el inicio de sesión
router.post('/users/signin', signin);

// Cierra la sesión del usuario
router.get('/usuarios/salir', logout);

// Exporta el router para ser utilizado en otras partes de la aplicación
module.exports = router;