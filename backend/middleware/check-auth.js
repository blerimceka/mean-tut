const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodetToken = jwt.verify(token, "secret_this_should_be_longer");
        req.userData = {email: decodetToken.email, userId: decodetToken.userId};
        next();
    } catch(error) {
        res.status(401).json({ message: "Auth Failed! "});
    }
} 