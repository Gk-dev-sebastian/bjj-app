const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middleware/validateFields'); // Suponiendo que tienes un middleware para validar campos.
const { validateAdminRole } = require('../middleware/validateRole'); // Suponiendo que tienes un middleware para validar el JWT.

const {
    createProgram,
    getAllPrograms,
    getProgramById,
    updateProgram, // Suponiendo que también quieres actualizar programas.
    deleteProgram  // Suponiendo que también quieres eliminar programas.
} = require('../controllers/programs.controller');

const router = Router();

// Crear un nuevo programa
router.post(
    '/',
    [
        
    ],
    createProgram
);

// Obtener todos los programas
router.get('/', validateAdminRole, getAllPrograms);

// Obtener un programa específico por ID
router.get('/:id', validateAdminRole, getProgramById);

// Actualizar programa (Opcional: suponiendo que tienes una función para esto)
router.put(
    '/:id',
    [
        validateAdminRole,
        check('programName', 'The program name is required').not().isEmpty(),
        validateFields
    ],
    updateProgram
);

// Eliminar programa (Opcional: suponiendo que tienes una función para esto)
router.delete('/:id', validateAdminRole, deleteProgram);

module.exports = router;
