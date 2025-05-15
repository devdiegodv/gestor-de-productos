const usersController = {};
const User = require('../models/User')


usersController.renderSignupForm = (req, res) => {
    res.render('users/signup');
};

/**
 * Maneja la lógica de registro de usuario: valida la entrada, verifica si el usuario existe y guarda el nuevo usuario.
 * - Valida que las contraseñas coincidan y la longitud.
 * - Previene el registro de correos duplicados.
 * - Hashea la contraseña antes de guardar.
 * - Usa mensajes flash para retroalimentación.
 */
usersController.signup = async (req, res) => {
    const errors = [];
    const { name = '', email = '', password = '', confirm_password = '' } = req.body;

    // Validación básica de entrada
    if (!name.trim()) {
        errors.push({ text: 'El nombre es obligatorio' });
    }
    if (!email.trim()) {
        errors.push({ text: 'El correo es obligatorio' });
    }
    // Validación de formato de correo (regex simple)
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push({ text: 'El correo no es válido' });
    }
    if (password !== confirm_password) {
        errors.push({ text: 'Las contraseñas no coinciden' });
    }
    if (password.length < 6 || password.length > 20) {
        errors.push({ text: 'Las contraseñas deben tener entre 6 y 20 caracteres' });
    }

    if (errors.length > 0) {
        // Elimina los campos de contraseña por seguridad
        return res.render('users/signup', {
            errors,
            name,
            email,
            password: '',
            confirm_password: ''
        });
    }

    try {
        // Verifica si el usuario ya existe
        const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
        if (existingUser) {
            req.flash('error_msg', 'El correo ya está registrado');
            return res.redirect('/usuarios/registro');
        }

        // Crea y guarda el nuevo usuario
        /**
         * Crea una nueva instancia de usuario.
         * 
         * @const {User} newUser - Objeto que representa al nuevo usuario.
         * @property {string} name - Nombre del usuario, sin espacios al inicio o final.
         * @property {string} email - Correo electrónico del usuario, en minúsculas y sin espacios.
         * @property {string} password - Contraseña del usuario (se establecerá después de aplicar hash).
         *
         * @seguridad
         * - Asegúrate de aplicar hash a la contraseña antes de guardarla en la base de datos.
         * - Valida y sanitiza los datos de entrada para evitar inyecciones y otros ataques.
         */
        const newUser = new User({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password: '' // Se establecerá después de aplicar hash
        });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();

        req.flash('success_msg', 'Usuario registrado correctamente');
        res.redirect('/usuarios/ingreso');
    } catch (err) {
        console.error('Error en el registro de usuario:', err);
        req.flash('error_msg', 'Ocurrió un error al registrar el usuario');
        res.redirect('/usuarios/registro');
    }
};

usersController.renderSigninForm = (req, res) => {
    res.render('users/signin');
};

usersController.signin = (req, res) => {
    res.send('signin');
};

usersController.logout = (req, res) => {
    res.send('logout');
};

module.exports = usersController;