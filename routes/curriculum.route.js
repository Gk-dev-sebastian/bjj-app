const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middleware/validateFields'); // Suponiendo que tienes un middleware para validar campos.
const { validateAdminRole } = require('../middleware/validateRole'); // Suponiendo que tienes un middleware para validar el JWT.

const {
    createFlowC,
    getAllFlowC,
    getFlowCById,
    updateFlowC,
    deleteFlowC
} = require('../controllers/curriculum.controller');

const router = Router();

// Crear un nuevo programa
router.post('/', validateAdminRole, createFlowC);

// Obtener todos los programas
router.get('/', validateAdminRole, getAllFlowC);

// Obtener un programa específico por ID
router.get('/:id', validateAdminRole, getFlowCById);

// Actualizar programa (Opcional: suponiendo que tienes una función para esto)
router.put(
    '/:id',
    [
        validateAdminRole,
        check('programName', 'The program name is required').not().isEmpty(),
        validateFields
    ],
    updateFlowC
);

// Eliminar programa (Opcional: suponiendo que tienes una función para esto)
router.delete('/:id', validateAdminRole, deleteFlowC);

module.exports = router;
