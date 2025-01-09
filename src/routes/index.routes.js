const { Router } = require('express');
const router = Router();

// Importamos las funciones del controlador
const { renderIndex, renderFaq } = require('../controllers/index.controller');

/**
 * Ruta principal del sitio web
 * @route GET /
 * @desc Renderiza la página principal del gestor de productos
 */
router.get('/', async (req, res, next) => {
    try {
        renderIndex(req, res);
    } catch (error) {
        console.error('Error al cargar la ruta de inicio: ', error);
        res.status(500).json({
            message: 'Ocurrió un error al cargar la ruta de inicio.',
            error: error.message || error
        });
    }
});

/**
 * Ruta de Preguntas Frecuentes (FAQ)
 * @route GET /faq
 * @desc Renderiza la página de preguntas frecuentes
 */
router.get('/faq', (req, res, next) => {
    try {
        renderFaq(req, res);
    } catch (error) {
        console.error('Error al cargar la ruta de FAQ: ', error);
        res.status(500).json({
            message: 'Ocurrió un error al cargar la ruta de FAQ.',
            error: error.message || error
        });
    }
});

// Exportamos el router para que pueda ser usado en otros archivos
module.exports = router;
