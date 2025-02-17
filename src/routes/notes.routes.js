const { Router } = require('express');
const router = Router();

const { renderNoteForm, createNewNote, renderNotes, renderEditForm, updateNote, deleteNote } = require('../controllers/notes.controller')

// nueva nota
router.get('/notas/agregar', renderNoteForm)

router.post('/notas/agregar', createNewNote)

// get all note
router.get('/notas', renderNotes)

// editar notas
router.get('/notas/editar/:id', renderEditForm)
router.put('/notas/editar/:id', updateNote)

// borrar notas
router.delete('/notas/borrar/:id', deleteNote)

// Exportamos el router para que pueda ser usado en otros archivos
module.exports = router;