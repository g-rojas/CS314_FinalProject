const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET || 'jarib', {
        expiresIn:"30d", 
    });
    console.log("Generated token:", data.token);
};
module.exports = generateToken;