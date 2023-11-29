const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documents.controller');  

const { validateAdminRole } = require('../middleware/validateRole'); 

router.post('/', validateAdminRole, documentController.createDocument);
router.get('/', validateAdminRole, documentController.getAllDocuments);
router.get('/:id', validateAdminRole, documentController.getDocumentById);
router.put('/:id', validateAdminRole, documentController.updateDocument);
router.delete('/:id', validateAdminRole, documentController.deleteDocument);

module.exports = router;