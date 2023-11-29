const jwt = require('jsonwebtoken');

const validateAdminRole = (req, res, next) => {
    // Obtener el token del header de la petición
    const token = req.header('Authorization') && req.header('Authorization');

    // Comprobar si no hay token
    if (!token) {
        return res.status(401).json({ ok: false, msg: 'No token provided' });
    }

    try {
        // Verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        req.userId = decoded._id;  
        req.role = decoded.role;     

        if (req.role !== 'ADMIN') {
            return res.status(401).json({
                ok: false,
                msg: 'Operation not allowed'
            });
        }

        next();  // Continuar a la siguiente función en la ruta

    } catch (error) {
        console.error('Error in JWT verification:', error);
        return res.status(401).json({ ok: false, msg: 'Token is not valid' });
    }
};


module.exports = {
    validateAdminRole
}
