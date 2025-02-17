const { Router } = require('express');
const router = Router();

// Importamos las funciones del controlador de notas
const { renderNoteForm, createNewNote, renderNotes, renderEditForm, updateNote, deleteNote } = require('../controllers/notes.controller');

/**
 * Ruta para renderizar el formulario de agregar una nueva nota
 * @route GET /notas/agregar
 * @desc Renderiza un formulario para agregar una nueva nota
 */
router.get('/notas/agregar', (req, res, next) => {
    try {
        renderNoteForm(req, res);
    } catch (error) {
        console.error('Error al cargar el formulario de agregar nota: ', error);
        res.status(500).json({
            message: 'Ocurrió un error al cargar el formulario de agregar nota.',
            error: error.message || error
        });
    }
});

/**
 * Ruta para crear una nueva nota
 * @route POST /notas/agregar
 * @desc Procesa y crea una nueva nota con los datos enviados
 */
router.post('/notas/agregar', (req, res, next) => {
    try {
        createNewNote(req, res);
    } catch (error) {
        console.error('Error al crear una nueva nota: ', error);
        res.status(500).json({
            message: 'Ocurrió un error al crear una nueva nota.',
            error: error.message || error
        });
    }
});

/**
 * Ruta para listar todas las notas
 * @route GET /notas
 * @desc Renderiza una lista de todas las notas existentes
 */
router.get('/notas', (req, res, next) => {
    try {
        renderNotes(req, res);
    } catch (error) {
        console.error('Error al listar las notas: ', error);
        res.status(500).json({
            message: 'Ocurrió un error al listar las notas.',
            error: error.message || error
        });
    }
});

/**
 * Ruta para renderizar el formulario de edición de una nota existente
 * @route GET /notas/editar/:id
 * @param {string} id - ID de la nota a editar
 * @desc Renderiza el formulario de edición de la nota con el ID especificado
 */
router.get('/notas/editar/:id', (req, res, next) => {
    try {
        renderEditForm(req, res);
    } catch (error) {
        console.error(`Error al cargar el formulario de edición de la nota con ID ${req.params.id}: `, error);
        res.status(500).json({
            message: `Ocurrió un error al cargar el formulario de edición de la nota con ID ${req.params.id}.`,
            error: error.message || error
        });
    }
});

/**
 * Ruta para actualizar una nota existente
 * @route PUT /notas/editar/:id
 * @param {string} id - ID de la nota a actualizar
 * @desc Actualiza la nota con el ID especificado
 */
router.put('/notas/editar/:id', (req, res, next) => {
    try {
        updateNote(req, res);
    } catch (error) {
        console.error(`Error al actualizar la nota con ID ${req.params.id}: `, error);
        res.status(500).json({
            message: `Ocurrió un error al actualizar la nota con ID ${req.params.id}.`,
            error: error.message || error
        });
    }
});

/**
 * Ruta para eliminar una nota existente
 * @route DELETE /notas/borrar/:id
 * @param {string} id - ID de la nota a eliminar
 * @desc Elimina la nota con el ID especificado
 */
router.delete('/notas/borrar/:id', (req, res, next) => {
    try {
        deleteNote(req, res);
    } catch (error) {
        console.error(`Error al eliminar la nota con ID ${req.params.id}: `, error);
        res.status(500).json({
            message: `Ocurrió un error al eliminar la nota con ID ${req.params.id}.`,
            error: error.message || error
        });
    }
});

// Exportamos el router para que pueda ser utilizado en otros archivos
module.exports = router;
