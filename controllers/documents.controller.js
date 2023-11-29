const Document = require('../models/document');  // Asegúrate de ajustar la ruta según la ubicación de tu modelo.

// CREATE
exports.createDocument = async (req, res) => {
    try {
        const document = new Document(req.body);
        await document.save();
        res.status(201).json({ success: true, data: document });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// READ (all documents)
exports.getAllDocuments = async (req, res) => {
    try {
        const documents = await Document.find().populate('user', 'name email');
        res.status(200).json({ success: true, data: documents });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// READ (one document by _id)
exports.getDocumentById = async (req, res) => {
    try {
        const document = await Document.findById(req.params.id).populate('user', 'name email');
        if (!document) return res.status(404).json({ success: false, message: 'Document not found.' });
        res.status(200).json({ success: true, data: document });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// UPDATE
exports.updateDocument = async (req, res) => {
    try {
        const document = await Document.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!document) return res.status(404).json({ success: false, message: 'Document not found.' });
        res.status(200).json({ success: true, data: document });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// DELETE
exports.deleteDocument = async (req, res) => {
    try {
        const document = await Document.findByIdAndDelete(req.params.id);
        if (!document) return res.status(404).json({ success: false, message: 'Document not found.' });
        res.status(200).json({ success: true, message: 'Document deleted.' });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
