const { Router } = require('express');
const { check } = require('express-validator');

const { getUsers, 
        getUserById, 
        getUsersByStatusAndRole, 
        searchUser, 
        updateUser, 
        deleteUser, 
        createUsers
      } = require('../controllers/users.controller');

const router = Router();

// 1. Obtener todos los usuarios
router.get('/', getUsers);

// 2. Obtener un usuario por ID
router.get('/:id', getUserById);

// 3. Obtener usuarios por `status` y `role`
router.get('/status/:status/role/:role', getUsersByStatusAndRole);

// 4. Buscar usuario (asumiendo una consulta basada en el nombre/email o algún campo específico)
router.get('/search/:query', searchUser);

// 5. Actualizar usuario
router.put('/:id', [
    // Aquí puedes agregar middlewares de validación si es necesario
    check('email', 'Email is mandatory').isEmail(),
], updateUser);

// 6. Eliminar usuario
router.delete('/:id', deleteUser);

// 7. Crear usuario
router.post('/', [
    check('email', 'Email is mandatory').isEmail(),
    check('pass', 'Password is mandatory').not().isEmpty(),
    // Aquí puedes agregar más middlewares de validación para los campos que sean necesarios
], createUsers);

// Ruta para completar registro
router.post('/complete-registration', [ 
        // Middlewares de validación
        check('email', 'Email is required').isEmail(),
        check('pass', 'Password is required').notEmpty(),
    ], completeRegistration);

//=================================================================================================

module.exports = router;
