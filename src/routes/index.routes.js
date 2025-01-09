const { Router } = require('express');
const router = Router();

// Importamos las funciones del controlador
const { renderIndex, renderAbout } = require('../controllers/index.controller');

/**
 * Ruta principal del sitio web
 * @route GET /
 * @desc Renderiza la página principal del gestor de productos
 */
router.get('/', async (req, res, next) => {
    try {
        await renderIndex(req, res);
    } catch (error) {
        console.error('Error al cargar la página de inicio:', error);
        next(error); // Pasamos el error al siguiente middleware de manejo de errores
    }
});

/**
 * Ruta de Preguntas Frecuentes (FAQ)
 * @route GET /faq
 * @desc Renderiza la página de preguntas frecuentes
 */
router.get('/faq', async (req, res, next) => {
    try {
        await renderAbout(req, res);
    } catch (error) {
        console.error('Error al cargar la página de FAQ:', error);
        next(error); // Pasamos el error al siguiente middleware de manejo de errores
    }
});

// Exportamos el router para que pueda ser usado en otros archivos
module.exports = router;
