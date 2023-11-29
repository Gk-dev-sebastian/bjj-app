

const jwt = require('jsonwebtoken');

const generateJTW = (_id, name, email, role) => {

    return new Promise((resolve, reject) => {

        const payload = {
            _id,
            name,
            email,
            role
        };
    
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '48h' }, 
            (err, token) => {
    
                if (err) {
                    console.error("Error generating JWT:", err);
                    reject(err);
                } else {
                    resolve(token);
                }
    
            }
        );

    });

}

module.exports = generateJTW;
