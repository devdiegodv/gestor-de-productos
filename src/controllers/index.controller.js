// Controlador para las rutas principales de la página (índice y FAQ)
const indexController = {};

/**
 * Renderiza la página principal (índice).
 * Esta función se encarga de procesar la solicitud para la página principal de la aplicación.
 * 
 * @param {Object} req - El objeto de la solicitud (request).
 * @param {Object} res - El objeto de la respuesta (response).
 */
indexController.renderIndex = (req, res) => {
    res.render('index');
};

/**
 * Renderiza la página de Preguntas Frecuentes (FAQ).
 * Esta función se encarga de procesar la solicitud para la página de preguntas frecuentes.
 * 
 * @param {Object} req - El objeto de la solicitud (request).
 * @param {Object} res - El objeto de la respuesta (response).
 */
indexController.renderFaq = (req, res) => {
    res.render('faq');
};

// Exportamos el controlador para su uso en otras partes de la aplicación
module.exports = indexController;
