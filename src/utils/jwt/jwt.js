const jwt = require("jsonwebtoken");

const generateSingn = (id, email) => {

return jwt.sign({id, email}, process.env.JWT_SECRET, {expiresIn: "7d"});
}
    const verifyJwt = (token)  => {
        return jwt.verify(token, process.env.JWT_SECRET);
    }

    module.exports = { generateSingn, verifyJwt }