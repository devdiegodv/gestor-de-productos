// Controlador para gestionar las notas (crear, listar, editar y eliminar notas)
const notesController = {};

/**
 * Renderiza el formulario para agregar una nueva nota.
 * Esta función se encarga de procesar la solicitud y renderizar la vista donde el usuario puede agregar una nueva nota.
 * 
 * @param {Object} req - El objeto de la solicitud (request).
 * @param {Object} res - El objeto de la respuesta (response).
 */
notesController.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

/**
 * Crea una nueva nota.
 * Esta función procesa la solicitud para crear una nueva nota con los datos proporcionados.
 * 
 * @param {Object} req - El objeto de la solicitud (request).
 * @param {Object} res - El objeto de la respuesta (response).
 */
notesController.createNewNote = (req, res) => {
    console.table(req.body)
    res.status(201).send('Nueva nota creada con éxito');
};

/**
 * Renderiza una lista de todas las notas.
 * Esta función se encarga de mostrar todas las notas existentes en el sistema.
 * 
 * @param {Object} req - El objeto de la solicitud (request).
 * @param {Object} res - El objeto de la respuesta (response).
 */
notesController.renderNotes = (req, res) => {
    res.send('lista de notas')
};

/**
 * Renderiza el formulario de edición para una nota existente.
 * Esta función se encarga de mostrar el formulario para editar una nota ya creada.
 * 
 * @param {Object} req - El objeto de la solicitud (request).
 * @param {Object} res - El objeto de la respuesta (response).
 */
notesController.renderEditForm = (req, res) => {
    res.send('editar nota')
};

/**
 * Actualiza una nota existente.
 * Esta función procesa la solicitud para actualizar los datos de una nota existente.
 * 
 * @param {Object} req - El objeto de la solicitud (request).
 * @param {Object} res - El objeto de la respuesta (response).
 */
notesController.updateNote = (req, res) => {
    res.send('Nota actualizada con éxito');
};

/**
 * Elimina una nota existente.
 * Esta función procesa la solicitud para eliminar una nota por su ID.
 * 
 * @param {Object} req - El objeto de la solicitud (request).
 * @param {Object} res - El objeto de la respuesta (response).
 */
notesController.deleteNote = (req, res) => {
   res.send('Nota eliminada con éxito');
};

// Exportamos el controlador para su uso en otras partes de la aplicación
module.exports = notesController;
