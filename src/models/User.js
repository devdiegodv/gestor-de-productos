const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

/**
 * Esquema de usuario para almacenar y gestionar la información de usuarios.
 * @typedef {Object} User
 * @property {string} name - Nombre del usuario.
 * @property {string} email - Correo electrónico del usuario.
 * @property {string} password - Contraseña encriptada del usuario.
 * @property {Date} createdAt - Fecha de creación (automáticamente añadida por Mongoose).
 * @property {Date} updatedAt - Fecha de la última actualización (automáticamente añadida por Mongoose).
 */
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
    },
    email: {
      type: String,
      required: [true, 'El correo electrónico es obligatorio'],
      unique: true,
      lowercase: true,
      match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Por favor ingresa un correo electrónico válido'], // Validación de formato de correo electrónico
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria'],
      minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
    },
  },
  {
    timestamps: true, // Mongoose añadirá automáticamente 'createdAt' y 'updatedAt'
  }
);

/**
 * Encripta la contraseña antes de almacenarla en la base de datos.
 * @param {string} password - Contraseña proporcionada por el usuario.
 * @returns {Promise<string>} Contraseña encriptada.
 */
UserSchema.methods.encryptPassword = async function(password) {
  try {
    // Generar un 'salt' (sal) con un nivel de complejidad de 10
    const salt = await bcrypt.genSalt(10);
    // Encriptar la contraseña usando el 'salt' generado
    return bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error('Error al encriptar la contraseña');
  }
};

/**
 * Compara una contraseña proporcionada con la almacenada en la base de datos.
 * @param {string} password - Contraseña proporcionada por el usuario.
 * @returns {Promise<boolean>} true si las contraseñas coinciden, false en caso contrario.
 */
UserSchema.methods.matchPassword = async function(password) {
  try {
    // Comparar la contraseña proporcionada con la almacenada en la base de datos
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error('Error al comparar las contraseñas');
  }
};

/**
 * Exporta el modelo 'User' basado en el esquema 'UserSchema'.
 * El modelo se utilizará para interactuar con la colección de usuarios en la base de datos.
 * 
 * @returns {Model} El modelo User.
 */
module.exports = model('User', UserSchema);