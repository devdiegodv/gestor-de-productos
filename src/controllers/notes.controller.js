const notesController = {};

notesController.renderNoteForm = (req, res) => {
    res.send('nota o producto agregada')
}

notesController.createNewNote = (req, res) => {
    res.send('nueva nota')
}

notesController.renderNotes = (req, res) => {
    res.send('listar notas')
}

notesController.renderEditForm = (req, res) => {
    res.send('render edición notas')
}

notesController.updateNote = (req, res) => {
    res.send('updateNote')
}

notesController.deleteNote = (req, res) => {
    res.send('deleteNote')
}

// Exportamos el controlador para su uso en otras partes de la aplicación
module.exports = notesController;