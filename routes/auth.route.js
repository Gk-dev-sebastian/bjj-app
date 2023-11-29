

const { Router } = require('express');
const { check } = require('express-validator');

const { signIn, renewToken, requestPasswordReset } = require('../controllers/auth.controller');

// Middleware para validar los campos
const { validateFields } = require('../middleware/validateFields');

const router = Router();

// Ruta para iniciar sesión
router.post(
    '/signin',
    [ // Middlewares de validación
        check('email', 'Email is required').isEmail(),
        check('pass', 'Password is required').notEmpty(),
        validateFields
    ],
    signIn
);

// Ruta para renovar token
router.get('/renew-token', renewToken); // Aquí podrías necesitar un middleware para verificar el token existente

// Ruta para solicitar reseteo de contraseña
router.post(
    '/request-password-reset',
    [
        check('email', 'Email is required').isEmail(),
        validateFields
    ],
    requestPasswordReset
);

module.exports = router;
