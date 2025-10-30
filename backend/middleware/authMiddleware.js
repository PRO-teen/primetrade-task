const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify token using JWT_SECRET
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user to request object
        req.user = await User.findById(decoded.id).select('-password'); // exclude password

        next(); // allow access to route
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = { authMiddleware };
